import api from '../../services/api';
import { setThreads, setLoading, setError } from './threadsSlice';

export const fetchThreads = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const threads = await api.getThreads();
    dispatch(setThreads(threads));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
