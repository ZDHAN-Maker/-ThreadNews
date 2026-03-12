/**
 * Skenario testing:
 * 1. reducer harus mengembalikan initial state
 * 2. reducer harus menangani action SET_AUTH_USER
 */

import authReducer from '../../features/auth/authSlice';

describe('auth reducer', () => {
  test('should return initial state', () => {
    const nextState = authReducer(undefined, {});

    expect(nextState).toEqual({
      user: null,
      token: null,
      isLoading: false,
      error: null,
    });
  });

  test('should return current state when given unknown action', () => {
    const initialState = {
      user: null,
      token: null,
      isLoading: false,
      error: null,
    };

    const action = { type: 'UNKNOWN' };

    const nextState = authReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  test('dummy test for CI error', () => {
    expect(1).toBe(2);
  });
});
