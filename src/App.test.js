import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => {
  window.history.replaceState({}, '', '/');
});

test('shows only the QR code before scanning', () => {
  render(<App />);
  expect(screen.queryByAltText(/powerbase ministry/i)).not.toBeInTheDocument();
  expect(screen.getByLabelText(/qr code/i)).toBeInTheDocument();
});

test('shows the invitation after scanning the QR code', () => {
  window.history.replaceState({}, '', '/?show=flyer');
  render(<App />);
  expect(screen.getByAltText(/powerbase ministry/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/qr code/i)).toBeInTheDocument();
});
