/**
 * Skenario testing:
 * 1. Header harus menampilkan judul aplikasi
 */

import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

test('should display application title', () => {

  render(<Header />);

  const title = screen.getByText(/dicoding forum app/i);

  expect(title).toBeInTheDocument();

});