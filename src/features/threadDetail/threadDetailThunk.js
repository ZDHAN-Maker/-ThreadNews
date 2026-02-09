import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchThreadDetail = createAsyncThunk(
  'threadDetail/fetch',
  async (threadId) => {
    const response = await api.getThreadDetail(threadId);
    return response.detailThread;
  }
);
