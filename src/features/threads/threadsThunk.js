import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

export const fetchThreads = createAsyncThunk('threads/fetchThreads', async (_, thunkAPI) => {
  try {
    const threads = await api.getThreads();
    const users = await api.getUsers();

    // Gabungkan owner info
    const enriched = threads.map((thread) => {
      const owner = users.find((u) => u.id === thread.ownerId);
      return {
        ...thread,
        owner: owner ? { name: owner.name, email: owner.email, avatar: owner.avatar } : null,
      };
    });

    return enriched;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const addThread = createAsyncThunk(
  'threads/addThread',
  async ({ title, category, body }, thunkAPI) => {
    try {
      const response = await api.createThread({ title, category, body });
      return response.thread;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
