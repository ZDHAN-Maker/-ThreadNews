/**
 * Skenario testing:
 * 1. thunk harus berupa function
 */

import { loginUser } from '../../features/auth/authThunk';

describe('auth thunk', () => {
  test('loginUser should be a function', () => {
    expect(typeof loginUser).toBe('function');
  });
});
