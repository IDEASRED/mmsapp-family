import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase.js';

export const SEARCH_ERRORS = {
  MISSING_FIELDS: 'ErrorMissingFields',
  SERVICES_UNAVAILABLE: 'ErrorServicesUnavailable',
  NIP_NOT_FOUND: 'ErrorNipNotFound',
  PHONE_NOT_AUTHORIZED: 'ErrorPhoneNotAuthorized',
  EMAIL_NOT_AUTHORIZED: 'ErrorEmailNotAuthorized',
  UNEXPECTED: 'ErrorUnexpected',
};

export const PHONE_MIN_DIGITS = 8;
export const PHONE_MAX_DIGITS = 15;

export const sanitizePhoneDigits = (raw) => String(raw ?? '').replace(/\D/g, '');

export const normalizeEmail = (raw) => String(raw ?? '').trim().toLowerCase();

// Accepts the local number (8341234567), with country code (528341234567)
// or with + (+52 834 123 4567); the server compares digits only.
export const isValidPhone = (raw) => {
  const value = String(raw ?? '').trim();
  if (!/^\+?[\d\s().-]+$/.test(value)) return false;
  const digits = sanitizePhoneDigits(value);
  return digits.length >= PHONE_MIN_DIGITS && digits.length <= PHONE_MAX_DIGITS;
};

export const mapLookupError = (error, searchBy) => {
  switch (error?.code) {
    case 'functions/invalid-argument':
      return SEARCH_ERRORS.MISSING_FIELDS;
    case 'functions/not-found':
      return SEARCH_ERRORS.NIP_NOT_FOUND;
    case 'functions/permission-denied':
      return searchBy === 'phone'
        ? SEARCH_ERRORS.PHONE_NOT_AUTHORIZED
        : SEARCH_ERRORS.EMAIL_NOT_AUTHORIZED;
    case 'functions/unavailable':
    case 'functions/deadline-exceeded':
    case 'functions/internal':
    case 'functions/resource-exhausted':
      return SEARCH_ERRORS.SERVICES_UNAVAILABLE;
    default:
      return SEARCH_ERRORS.UNEXPECTED;
  }
};

export const lookupFamilyService = async (searchBy, credentials = {}) => {
  const nip = String(credentials.nip_rastreo ?? '').trim();
  const phone = searchBy === 'phone' ? String(credentials.phone ?? '').trim() : '';
  const email = searchBy === 'email' ? normalizeEmail(credentials.email) : '';

  if (!nip || (!phone && !email)) {
    return { service: undefined, error: SEARCH_ERRORS.MISSING_FIELDS };
  }

  try {
    const callable = httpsCallable(functions, 'lookupFamiliarServiceWeb');
    const { data } = await callable({ nip, phone, email });
    if (!data?.authorized || !data?.service) {
      return { service: undefined, error: mapLookupError({ code: 'functions/permission-denied' }, searchBy) };
    }
    return { service: data.service, error: null };
  } catch (error) {
    return { service: undefined, error: mapLookupError(error, searchBy) };
  }
};
