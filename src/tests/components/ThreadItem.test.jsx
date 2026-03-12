/**
 * Skenario testing:
 * 1. ThreadItem harus dirender tanpa error
 */

import { render } from '@testing-library/react';
import ThreadItem from '../../components/ThreadItem';
import { BrowserRouter } from 'react-router-dom';

test('should render thread item correctly', () => {

  const thread = {
    id: 'thread-1',
    title: 'Testing Thread',
    body: 'Test body',
    category: 'test',
    createdAt: new Date().toISOString(),
    owner: { name: 'User' },
    totalComments: 0,
    upVotesBy: [],
    downVotesBy: []
  };

  render(
    <BrowserRouter>
      <ThreadItem thread={thread} />
    </BrowserRouter>
  );

});