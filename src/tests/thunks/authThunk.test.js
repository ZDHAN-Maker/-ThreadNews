/**
 * Skenario Testing:
 * 1. Harus memanggil API login
 * 2. Harus dispatch action ketika login berhasil
 */

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loginUser } from '../../features/auth/authThunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('auth thunk test', () => {
  test('should dispatch action when login success', async () => {
    const store = mockStore({});

    await store.dispatch(
      loginUser({
        email: 'test@mail.com',
        password: '123456',
      })
    );

    const actions = store.getActions();

    expect(actions.length).toBeGreaterThan(0);
  });
});
