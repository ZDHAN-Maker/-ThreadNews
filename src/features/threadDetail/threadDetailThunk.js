import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

// Fetch detail thread
export const fetchThreadDetail = createAsyncThunk('threadDetail/fetch', async (id) => {
  return await api.getThreadDetail(id);
});

// Add comment
export const addComment = createAsyncThunk(
  'threadDetail/addComment',
  async ({ threadId, content }) => {
    const result = await api.createComment(threadId, { content });
    return { comment: result };
  }
);

// Upvote comment
export const upvoteCommentThunk = createAsyncThunk(
  'threadDetail/upvoteComment',
  async ({ threadId, commentId }) => {
    await api.upvoteComment(threadId, commentId);
    return await api.getThreadDetail(threadId);
  }
);

// Downvote comment
export const downvoteCommentThunk = createAsyncThunk(
  'threadDetail/downvoteComment',
  async ({ threadId, commentId }) => {
    await api.downvoteComment(threadId, commentId);
    return await api.getThreadDetail(threadId);
  }
);

// Neutralize vote comment
export const neutralizeCommentVoteThunk = createAsyncThunk(
  'threadDetail/neutralizeCommentVote',
  async ({ threadId, commentId }) => {
    await api.neutralizeCommentVote(threadId, commentId);
    return await api.getThreadDetail(threadId);
  }
);
