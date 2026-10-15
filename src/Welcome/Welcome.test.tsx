/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import i18n from '../i18n.js';
import Welcome from './welcome.jsx';
import Tracking from '../Tracking/tracking.jsx';

type LookupPayload = { nip: string; phone: string; email: string };
let mockLookup: (payload: LookupPayload) => Promise<unknown>;
let mockLookupCalls: LookupPayload[] = [];

jest.mock('../firebase.js', () => ({ db: {}, functions: {} }));

jest.mock('firebase/functions', () => ({
  httpsCallable: () => (payload) => {
    mockLookupCalls.push(payload);
    return mockLookup(payload);
  },
}));

jest.mock('react-loader-spinner', () => ({ TailSpin: () => null }));

const service = {
  id: 'svc-1',
  nip_rastreo: 'ABC123',
  origen: 'Dallas',
  destino: 'Monterrey',
  sucursal: 'Irving',
  fecha: '2026/10/14',
  arrivalDate: null,
  rastreo: [{ date: '2026-10-14', tracking_info: 'Salió de Dallas' }],
};

const callableError = (code: string) => Object.assign(new Error(code), { code });

const renderApp = (initialEntries: Array<string | { pathname: string; state?: unknown }> = ['/']) => render(
  <MemoryRouter initialEntries={initialEntries}>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/tracking/:id" element={<Tracking />} />
    </Routes>
  </MemoryRouter>,
);

const fillPhoneForm = (phone: string, nip: string) => {
  userEvent.click(screen.getByLabelText('Teléfono'));
  userEvent.type(screen.getByRole('textbox', { name: 'Teléfono' }), phone);
  userEvent.type(screen.getByRole('textbox', { name: 'NIP' }), nip);
  userEvent.click(screen.getByRole('button', { name: 'Ver ahora' }));
};

beforeAll(async () => {
  await i18n.changeLanguage('es');
});

beforeEach(() => {
  mockLookupCalls = [];
  mockLookup = async () => ({
    data: {
      ok: true, authorized: true, method: 'phone', serviceId: service.id, service,
    },
  });
});

test('enables the phone option on the login form', () => {
  renderApp();
  expect(screen.getByLabelText('Teléfono')).toBeEnabled();
});

test('removes the services list cached by older versions', () => {
  localStorage.setItem('servList', '[{"id":"svc-1"}]');
  renderApp();
  expect(localStorage.getItem('servList')).toBeNull();
});

test.each([
  ['without country code', '8341234567'],
  ['with country code', '528341234567'],
  ['with +', '+528341234567'],
])('opens the tracking page when logging in with the phone %s', async (_, phone) => {
  renderApp();
  fillPhoneForm(phone, 'ABC123');

  expect(await screen.findByText('Salió de Dallas')).toBeInTheDocument();
  expect(screen.getByText('ABC123')).toBeInTheDocument();
  expect(screen.getByText(/Irving/)).toBeInTheDocument();
  expect(screen.getByText(/Fecha estimada de llegada/)).toBeInTheDocument();
  expect(mockLookupCalls).toEqual([{ nip: 'ABC123', phone, email: '' }]);
});

test('shows an error and keeps the typed values when the phone is not authorized', async () => {
  mockLookup = async () => { throw callableError('functions/permission-denied'); };
  renderApp();
  fillPhoneForm('8110000000', 'ABC123');

  expect(await screen.findByRole('alert')).toHaveTextContent('Este teléfono no está autorizado para el servicio con ese NIP');
  expect(screen.getByRole('textbox', { name: 'Teléfono' })).toHaveValue('8110000000');
  expect(screen.getByRole('textbox', { name: 'NIP' })).toHaveValue('ABC123');
});

test('shows an error when no service has the NIP', async () => {
  mockLookup = async () => { throw callableError('functions/not-found'); };
  renderApp();
  fillPhoneForm('8341234567', 'WRONG');
  expect(await screen.findByRole('alert')).toHaveTextContent('No encontramos ningún servicio con ese NIP');
});

test('shows a connection error when the server is unavailable', async () => {
  mockLookup = async () => { throw callableError('functions/unavailable'); };
  renderApp();
  fillPhoneForm('8341234567', 'ABC123');
  expect(await screen.findByRole('alert')).toHaveTextContent('No pudimos conectar con el servidor');
});

test('shows a generic error for unexpected failures', async () => {
  mockLookup = async () => { throw new Error('boom'); };
  renderApp();
  fillPhoneForm('8341234567', 'ABC123');
  expect(await screen.findByRole('alert')).toHaveTextContent('Ocurrió un error inesperado');
});

test('validates the phone format without calling the server', async () => {
  renderApp();
  fillPhoneForm('12345', 'ABC123');
  expect(await screen.findByText(/Ingresa un teléfono válido de 8 a 15 dígitos/)).toBeInTheDocument();
  expect(mockLookupCalls).toHaveLength(0);
});

test('shows required field messages when submitting empty', async () => {
  renderApp();
  userEvent.click(screen.getByLabelText('Teléfono'));
  userEvent.click(screen.getByRole('button', { name: 'Ver ahora' }));
  expect(await screen.findAllByText('Campo obligatorio')).toHaveLength(2);
  expect(mockLookupCalls).toHaveLength(0);
});

test('still supports the email login', async () => {
  renderApp();
  userEvent.type(screen.getByRole('textbox', { name: 'Correo' }), 'ANA@mail.com');
  userEvent.type(screen.getByRole('textbox', { name: 'NIP' }), 'ABC123');
  userEvent.click(screen.getByRole('button', { name: 'Ver ahora' }));

  expect(await screen.findByText('Salió de Dallas')).toBeInTheDocument();
  expect(mockLookupCalls).toEqual([{ nip: 'ABC123', phone: '', email: 'ana@mail.com' }]);
});

test('redirects to the login when opening the tracking page without an authorized service', async () => {
  renderApp(['/tracking/svc-1']);
  expect(await screen.findByRole('button', { name: 'Ver ahora' })).toBeInTheDocument();
});
