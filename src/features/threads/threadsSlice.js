import { createSlice } from '@reduxjs/toolkit';

const threadsSlice = createSlice({
  name: 'threads',
  initialState: {
    threads: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setThreads(state, action) {
      state.threads = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setThreads, setLoading, setError } = threadsSlice.actions;
export default threadsSlice.reducer;
