const isPlainObject = (value) => value !== null && typeof value === 'object' && !(value instanceof Date);

const FIRESTORE_SECONDS_KEY = '_seconds';

const getTimestampSeconds = (value) => {
  if (!isPlainObject(value)) return null;
  if (typeof value.seconds === 'number') return value.seconds;
  // Firestore callable payloads serialize Timestamps as { "_seconds": number }.
  const serializedSeconds = value[FIRESTORE_SECONDS_KEY];
  if (typeof serializedSeconds === 'number') return serializedSeconds;
  if (typeof value.toMillis === 'function') return value.toMillis() / 1000;
  return null;
};

const toDate = (value) => {
  if (!value && value !== 0) return null;
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;

  const seconds = getTimestampSeconds(value);
  if (seconds !== null) {
    const date = new Date(seconds * 1000);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  if (typeof value === 'number') {
    const date = new Date(value > 1e12 ? value : value * 1000);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) return null;
    const normalized = trimmed.includes('/') && !trimmed.includes('T')
      ? trimmed.replace(/\//g, '-')
      : trimmed;
    const date = new Date(normalized);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  return null;
};

/** First usable date value. Priority matches hybrid familia: timestamp > fecha > arrivalDate. */
export const getArrivalDate = (service = {}) => {
  const candidates = [
    service.timestamp,
    service.fecha,
    service.arrivalDate,
    service.fecha_recoleccion,
  ];
  return candidates.find((value) => toDate(value) || (typeof value === 'string' && value.trim())) || '';
};

export const getSucursalName = (sucursal) => {
  if (typeof sucursal === 'string') return sucursal.trim();
  if (isPlainObject(sucursal)) {
    return String(sucursal.nombre_sucursal ?? '').trim();
  }
  return '';
};

export const getSucursalAddress = (sucursal) => {
  if (isPlainObject(sucursal)) {
    return String(sucursal.direccion_sucursal ?? '').trim();
  }
  return '';
};

export const formatDisplayDate = (value, locale = 'es-MX') => {
  const date = toDate(value);
  if (!date) {
    return typeof value === 'string' ? value.trim() : '';
  }

  const hasTime = (typeof value === 'string' && value.includes('T'))
    || getTimestampSeconds(value) !== null;

  if (hasTime) {
    return date.toLocaleString(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
