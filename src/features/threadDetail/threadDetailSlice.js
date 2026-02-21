import { createSlice } from '@reduxjs/toolkit';
import { fetchThreadDetail, addComment } from './threadDetailThunk';

const threadDetailSlice = createSlice({
  name: 'threadDetail',
  initialState: {
    thread: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearThreadDetail: (state) => {
      state.thread = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchThreadDetail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchThreadDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.thread = action.payload;
      })
      .addCase(fetchThreadDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        if (state.thread) {
          state.thread.comments = [action.payload, ...(state.thread.comments || [])];
        }
      });
  },
});

export const { clearThreadDetail } = threadDetailSlice.actions;
export default threadDetailSlice.reducer;
