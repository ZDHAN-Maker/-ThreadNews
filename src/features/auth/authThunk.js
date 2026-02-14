import api from "../../services/api";
import { setLoading, setToken, setUser, setError } from "./authSlice";
import { logout } from "./authSlice";

export const registerUser = (payload) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setError(null));

  try {
    await api.register(payload);
  } catch (error) {
    dispatch(setError(error.message));
    throw error;
  } finally {
    dispatch(setLoading(false));
  }
};

export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      // api.login SUDAH return string token
      const token = await api.login({ email, password });

      if (!token) {
        throw new Error("Token gagal dibuat");
      }

      dispatch(setToken(token));

      const user = await api.getOwnProfile();
      dispatch(setUser(user));
    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };

export const fetchOwnProfile = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const user = await api.getOwnProfile();
    dispatch(setUser(user));
  } catch {
    dispatch(logout());
  } finally {
    dispatch(setLoading(false));
  }
};
