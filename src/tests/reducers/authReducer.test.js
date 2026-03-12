/**
 * Skenario Testing:
 * 1. Harus mengembalikan initial state ketika action tidak dikenali
 * 2. Harus menyimpan user ketika login berhasil
 */

import authReducer, { setAuthUser, logout } from '../../features/auth/authSlice';

describe('auth reducer test', () => {
  test('should return initial state when given unknown action', () => {
    const initialState = { user: null };
    const action = { type: 'UNKNOWN' };

    const nextState = authReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  test('should store user data when login success', () => {
    const initialState = { user: null };

    const action = setAuthUser({
      id: 'user-1',
      name: 'Zidhan',
    });

    const nextState = authReducer(initialState, action);

    expect(nextState.user).toEqual(action.payload);
  });
});
