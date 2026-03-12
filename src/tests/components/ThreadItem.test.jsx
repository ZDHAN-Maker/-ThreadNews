/**
 * Skenario Testing:
 * 1. ThreadItem harus menampilkan judul thread
 */

import { render, screen } from '@testing-library/react';
import ThreadItem from '../../components/ThreadItem';

test('should display thread title', () => {
  const thread = {
    title: 'Testing Thread',
  };

  render(<ThreadItem thread={thread} />);

  expect(screen.getByText('Testing Thread')).toBeInTheDocument();
});