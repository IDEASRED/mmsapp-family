/* eslint-env jest */
import { httpsCallable } from 'firebase/functions';
import {
  SEARCH_ERRORS,
  isValidPhone,
  lookupFamilyService,
  mapLookupError,
  sanitizePhoneDigits,
} from './familyAuth.js';

jest.mock('../firebase.js', () => ({ functions: {} }));
jest.mock('firebase/functions', () => ({ httpsCallable: jest.fn() }));

const service = { id: 'svc-1', nip_rastreo: 'ABC123', rastreo: [] };

const mockCallable = (impl) => {
  const callable = jest.fn(impl);
  httpsCallable.mockReturnValue(callable);
  return callable;
};

const callableError = (code) => Object.assign(new Error(code), { code });

describe('sanitizePhoneDigits', () => {
  test('removes every non digit character', () => {
    expect(sanitizePhoneDigits('+52 (834) 123-45.67')).toBe('528341234567');
    expect(sanitizePhoneDigits(undefined)).toBe('');
  });
});

describe('isValidPhone', () => {
  test.each([
    ['8341234567', true],
    ['528341234567', true],
    ['+528341234567', true],
    ['+52 (834) 123-4567', true],
    ['1234567', false],
    ['1234567890123456', false],
    ['83412abc67', false],
    ['52+8341234567', false],
    ['', false],
  ])('%s -> %s', (value, expected) => {
    expect(isValidPhone(value)).toBe(expected);
  });
});

describe('mapLookupError', () => {
  test.each([
    ['functions/invalid-argument', 'phone', SEARCH_ERRORS.MISSING_FIELDS],
    ['functions/not-found', 'phone', SEARCH_ERRORS.NIP_NOT_FOUND],
    ['functions/permission-denied', 'phone', SEARCH_ERRORS.PHONE_NOT_AUTHORIZED],
    ['functions/permission-denied', 'email', SEARCH_ERRORS.EMAIL_NOT_AUTHORIZED],
    ['functions/unavailable', 'phone', SEARCH_ERRORS.SERVICES_UNAVAILABLE],
    ['functions/deadline-exceeded', 'phone', SEARCH_ERRORS.SERVICES_UNAVAILABLE],
    ['functions/internal', 'phone', SEARCH_ERRORS.SERVICES_UNAVAILABLE],
    ['functions/unknown', 'phone', SEARCH_ERRORS.UNEXPECTED],
    [undefined, 'phone', SEARCH_ERRORS.UNEXPECTED],
  ])('%s (%s) -> %s', (code, searchBy, expected) => {
    expect(mapLookupError({ code }, searchBy)).toBe(expected);
  });
});

describe('lookupFamilyService', () => {
  test.each([
    ['8341234567'],
    ['528341234567'],
    ['+528341234567'],
  ])('sends the phone %s and the trimmed NIP to lookupFamiliarServiceWeb', async (phone) => {
    const callable = mockCallable(async () => ({ data: { ok: true, authorized: true, service } }));
    const result = await lookupFamilyService('phone', { phone: ` ${phone} `, nip_rastreo: ' ABC123 ' });

    expect(httpsCallable).toHaveBeenCalledWith({}, 'lookupFamiliarServiceWeb');
    expect(callable).toHaveBeenCalledWith({ nip: 'ABC123', phone, email: '' });
    expect(result).toEqual({ service, error: null });
  });

  test('normalizes the email and does not send a phone', async () => {
    const callable = mockCallable(async () => ({ data: { ok: true, authorized: true, service } }));
    await lookupFamilyService('email', { email: ' Ana@Mail.COM ', phone: '8341234567', nip_rastreo: 'ABC123' });
    expect(callable).toHaveBeenCalledWith({ nip: 'ABC123', phone: '', email: 'ana@mail.com' });
  });

  test('does not call the server when fields are missing', async () => {
    const callable = mockCallable(async () => ({ data: {} }));
    const result = await lookupFamilyService('phone', { phone: '  ', nip_rastreo: 'ABC123' });
    expect(callable).not.toHaveBeenCalled();
    expect(result.error).toBe(SEARCH_ERRORS.MISSING_FIELDS);
  });

  test('maps server errors to user messages', async () => {
    mockCallable(async () => { throw callableError('functions/permission-denied'); });
    const result = await lookupFamilyService('phone', { phone: '8341234567', nip_rastreo: 'ABC123' });
    expect(result).toEqual({ service: undefined, error: SEARCH_ERRORS.PHONE_NOT_AUTHORIZED });
  });

  test('treats a response without an authorized service as not authorized', async () => {
    mockCallable(async () => ({ data: { ok: true, authorized: false } }));
    const result = await lookupFamilyService('email', { email: 'ana@mail.com', nip_rastreo: 'ABC123' });
    expect(result.error).toBe(SEARCH_ERRORS.EMAIL_NOT_AUTHORIZED);
  });
});
