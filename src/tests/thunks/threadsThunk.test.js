/**
 * Skenario testing:
 * 1. fetchThreads harus berupa function
 */

import { fetchThreads } from '../../features/threads/threadsThunk';

describe('threads thunk', () => {
  test('fetchThreads should be a function', () => {
    expect(typeof fetchThreads).toBe('function');
  });
});
