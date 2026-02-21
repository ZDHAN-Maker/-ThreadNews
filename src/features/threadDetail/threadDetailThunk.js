import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

export const fetchThreadDetail = createAsyncThunk('threadDetail/fetch', async (id) => {
  const detail = await api.getThreadDetail(id);
  return detail;
});

export const addComment = createAsyncThunk(
  'threadDetail/addComment',
  async ({ threadId, content }) => {
    const response = await api.createComment(threadId, content);
    return response;
  }
);
