import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchThreadDetail = createAsyncThunk(
  "threadDetail/fetch",
  async (id) => {
    const detail = await api.getThreadDetail(id);
    return detail;
  }
);

