/**
 * Skenario Testing:
 * 1. Harus mengambil data threads dari API
 * 2. Harus dispatch action ketika data berhasil diambil
 */

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchThreads } from '../../features/threads/threadsThunk';

const mockStore = configureStore([thunk]);

describe('threads thunk test', () => {
  test('should fetch threads successfully', async () => {
    const store = mockStore({});

    await store.dispatch(fetchThreads());

    const actions = store.getActions();

    expect(actions.length).toBeGreaterThan(0);
  });
});
