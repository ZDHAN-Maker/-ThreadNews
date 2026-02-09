import api from '../../services/api';
import { setLoading, setToken, setUser, setError } from './authSlice';
import { logout } from './authSlice';

export const registerUser = (payload) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await api.register(payload);
  } catch (error) {
    dispatch(setError(error.message));
    throw error;
  } finally {
    dispatch(setLoading(false));
  }
};

export const loginUser = ({ email, password }) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { token } = await api.login({ email, password });
    localStorage.setItem('token', token);
    dispatch(setToken(token));

    const user = await api.getOwnProfile(token);
    dispatch(setUser(user));
  } catch (error) {
    dispatch(setError(error.message));
    throw error;
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchOwnProfile = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  if (!token) return;

  dispatch(setLoading(true));
  try {
    const user = await api.getOwnProfile(token);
    dispatch(setUser(user));
  } catch {
    dispatch(logout());
  } finally {
    dispatch(setLoading(false));
  }
};
