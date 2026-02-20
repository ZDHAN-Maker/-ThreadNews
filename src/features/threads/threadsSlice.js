import { createSlice } from '@reduxjs/toolkit';
import { fetchThreads, addThread } from './threadsThunk';

const threadsSlice = createSlice({
  name: 'threads',
  initialState: {
    threads: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // FETCH THREADS
      .addCase(fetchThreads.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchThreads.fulfilled, (state, action) => {
        state.isLoading = false;
        state.threads = action.payload;
      })
      .addCase(fetchThreads.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // ADD THREAD
      .addCase(addThread.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addThread.fulfilled, (state, action) => {
        state.isLoading = false;
        state.threads.unshift(action.payload); // auto refresh
      })
      .addCase(addThread.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default threadsSlice.reducer;