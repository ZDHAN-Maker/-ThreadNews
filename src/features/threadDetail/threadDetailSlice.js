import { createSlice } from '@reduxjs/toolkit';
import {
  fetchThreadDetail,
  addComment,
  upvoteCommentThunk,
  downvoteCommentThunk,
  neutralizeCommentVoteThunk,
} from './threadDetailThunk';

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
          const newComment = action.payload.comment;
          state.thread.comments = [newComment, ...state.thread.comments];
        }
      })
      .addCase(upvoteCommentThunk.fulfilled, (state, action) => {
        state.thread = action.payload;
      })
      .addCase(downvoteCommentThunk.fulfilled, (state, action) => {
        state.thread = action.payload;
      })
      .addCase(neutralizeCommentVoteThunk.fulfilled, (state, action) => {
        state.thread = action.payload;
      });
  },
});

export const { clearThreadDetail } = threadDetailSlice.actions;
export default threadDetailSlice.reducer;
