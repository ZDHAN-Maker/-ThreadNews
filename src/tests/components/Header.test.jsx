/**
 * Skenario Testing:
 * 1. Header harus menampilkan judul aplikasi
 */

import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

test('should display application title', () => {
  render(<Header />);

  const title = screen.getByText(/news/i);

  expect(title).toBeInTheDocument();
});