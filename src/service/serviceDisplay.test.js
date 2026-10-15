/* eslint-env jest */
import {
  formatDisplayDate,
  getArrivalDate,
  getSucursalAddress,
  getSucursalName,
} from './serviceDisplay.js';

describe('getArrivalDate', () => {
  test('prefers a usable Firestore timestamp over fecha', () => {
    expect(getArrivalDate({
      timestamp: { _seconds: 1791930383, _nanoseconds: 0 },
      fecha: '2026/10/14',
    })).toEqual({ _seconds: 1791930383, _nanoseconds: 0 });
  });

  test('skips empty timestamp objects and uses fecha', () => {
    expect(getArrivalDate({ timestamp: {}, fecha: '2026/10/14' })).toBe('2026/10/14');
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
  test('formats Firestore timestamps without showing [object Object]', () => {
    const formatted = formatDisplayDate({ _seconds: 1791930383, _nanoseconds: 0 }, 'es-MX');
    expect(formatted).toMatch(/2026/);
    expect(formatted).not.toContain('[object Object]');
  });

  test('formats slash dates and ISO timestamps', () => {
    expect(formatDisplayDate('2026/10/14', 'es-MX')).toMatch(/2026/);
    expect(formatDisplayDate('2026-10-15T17:02:55.236Z', 'es-MX')).toMatch(/2026/);
  });

  test('returns empty string for unreadable objects instead of [object Object]', () => {
    expect(formatDisplayDate({})).toBe('');
    expect(formatDisplayDate('por confirmar')).toBe('por confirmar');
  });
});
