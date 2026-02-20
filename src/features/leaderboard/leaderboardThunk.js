import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

export const fetchLeaderboards = createAsyncThunk(
  'leaderboard/fetchLeaderboards',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getLeaderboards();
      return response.leaderboards;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
