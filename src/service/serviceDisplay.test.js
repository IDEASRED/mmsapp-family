/* eslint-env jest */
import {
  formatDisplayDate,
  getArrivalDate,
  getSucursalAddress,
  getSucursalName,
} from './serviceDisplay.js';

describe('getArrivalDate', () => {
  test('prefers timestamp, then fecha, then arrivalDate, then fecha_recoleccion', () => {
    expect(getArrivalDate({
      timestamp: '2026-10-20',
      fecha: '2026/10/14',
      arrivalDate: 'old',
      fecha_recoleccion: '2026/10/10',
    })).toBe('2026-10-20');
    expect(getArrivalDate({ fecha: '2026/10/14', arrivalDate: 'old' })).toBe('2026/10/14');
    expect(getArrivalDate({ arrivalDate: '2026-11-01' })).toBe('2026-11-01');
    expect(getArrivalDate({ fecha_recoleccion: '2026/10/10' })).toBe('2026/10/10');
    expect(getArrivalDate({})).toBe('');
  });
});

describe('sucursal helpers', () => {
  test('reads the current string format and the legacy object format', () => {
    expect(getSucursalName('Irving')).toBe('Irving');
    expect(getSucursalName({ nombre_sucursal: 'Dallas Branch', direccion_sucursal: 'Main St' })).toBe('Dallas Branch');
    expect(getSucursalAddress({ nombre_sucursal: 'Dallas Branch', direccion_sucursal: 'Main St' })).toBe('Main St');
    expect(getSucursalAddress('Irving')).toBe('');
    expect(getSucursalName(null)).toBe('');
  });
});

describe('formatDisplayDate', () => {
  test('formats slash dates and ISO timestamps', () => {
    expect(formatDisplayDate('2026/10/14', 'es-MX')).toMatch(/2026/);
    expect(formatDisplayDate('2026-10-15T17:02:55.236Z', 'es-MX')).toMatch(/2026/);
  });

  test('returns the original value when it cannot be parsed', () => {
    expect(formatDisplayDate('por confirmar')).toBe('por confirmar');
  });
});
