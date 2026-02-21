import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

export const fetchThreadDetail = createAsyncThunk('threadDetail/fetch', async (id) => {
  return await api.getThreadDetail(id);
});

export const addComment = createAsyncThunk(
  'threadDetail/addComment',
  async ({ threadId, content }) => {
    const result = await api.createComment(threadId, { content });
    return result.data; 
  }
);

export const upvoteCommentThunk = createAsyncThunk(
  'threadDetail/upvoteComment',
  async ({ threadId, commentId }) => {
    await api.upvoteComment(threadId, commentId);
    return await api.getThreadDetail(threadId);
  }
);

export const downvoteCommentThunk = createAsyncThunk(
  'threadDetail/downvoteComment',
  async ({ threadId, commentId }) => {
    await api.downvoteComment(threadId, commentId);
    return await api.getThreadDetail(threadId);
  }
);

export const neutralizeCommentVoteThunk = createAsyncThunk(
  'threadDetail/neutralizeCommentVote',
  async ({ threadId, commentId }) => {
    await api.neutralizeCommentVote(threadId, commentId);
    return await api.getThreadDetail(threadId);
  }
);
