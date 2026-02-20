import api from '../../services/api';
import { setThreads, setLoading, setError } from './threadsSlice';

export const fetchThreads = () => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const [threads, users] = await Promise.all([
      api.getThreads(),
      api.getUsers(),
    ]);

    const threadsWithOwner = threads.map((thread) => ({
      ...thread,
      owner: users.find((user) => user.id === thread.ownerId),
    }));

    dispatch(setThreads(threadsWithOwner));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
