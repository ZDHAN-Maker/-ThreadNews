/**
 * Skenario testing:
 * 1. reducer harus mengembalikan initial state
 * 2. reducer harus tetap sama jika action tidak dikenali
 */

import threadsReducer from '../../features/threads/threadsSlice';

describe('threads reducer', () => {

  test('should return initial state', () => {

    const nextState = threadsReducer(undefined, {});

    expect(nextState).toEqual({
      threads: [],
      isLoading: false,
      error: null,
    });

  });

  test('should return current state for unknown action', () => {

    const initialState = {
      threads: [],
      isLoading: false,
      error: null,
    };

    const action = { type: 'UNKNOWN' };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(initialState);

  });

});