/**
 * Skenario Testing:
 * 1. Harus mengembalikan initial state
 * 2. Harus menambahkan thread baru
 */

import threadsReducer, { addThread } from '../../features/threads/threadsSlice';

describe('threads reducer test', () => {
  test('should return initial state', () => {
    const initialState = { threads: [] };
    const action = { type: 'UNKNOWN' };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  test('should add new thread', () => {
    const initialState = { threads: [] };

    const thread = {
      id: 'thread-1',
      title: 'Test Thread',
    };

    const action = addThread(thread);

    const nextState = threadsReducer(initialState, action);

    expect(nextState.threads.length).toBe(1);
  });
});
