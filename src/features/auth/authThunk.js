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
      const response = await api.login({ email, password });

      // Ambil accessToken dari response API
      const token = response.data?.data?.accessToken;

      if (!token) {
        throw new Error("Token tidak ditemukan");
      }

      localStorage.setItem("token", token);
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
