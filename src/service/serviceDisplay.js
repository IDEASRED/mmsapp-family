/** Priority matches the hybrid familia screen: timestamp > fecha > arrivalDate. */
export const getArrivalDate = (service = {}) => (
  service.timestamp
  || service.fecha
  || service.arrivalDate
  || service.fecha_recoleccion
  || ''
);

export const getSucursalName = (sucursal) => {
  if (typeof sucursal === 'string') return sucursal.trim();
  if (sucursal && typeof sucursal === 'object') {
    return String(sucursal.nombre_sucursal ?? '').trim();
  }
  return '';
};

export const getSucursalAddress = (sucursal) => {
  if (sucursal && typeof sucursal === 'object') {
    return String(sucursal.direccion_sucursal ?? '').trim();
  }
  return '';
};

const toDate = (value) => {
  if (!value) return null;
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
  if (typeof value === 'object' && typeof value.seconds === 'number') {
    return new Date(value.seconds * 1000);
  }
  if (typeof value === 'number') {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }
  if (typeof value === 'string') {
    const normalized = value.includes('/') && !value.includes('T')
      ? value.replace(/\//g, '-')
      : value;
    const date = new Date(normalized);
    return Number.isNaN(date.getTime()) ? null : date;
  }
  return null;
};

export const formatDisplayDate = (value, locale = 'es-MX') => {
  const date = toDate(value);
  if (!date) return String(value ?? '').trim();
  const hasTime = typeof value === 'string' && value.includes('T');
  if (hasTime || (value && typeof value === 'object' && 'seconds' in value)) {
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
