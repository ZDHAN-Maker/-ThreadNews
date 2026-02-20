import { createSlice } from '@reduxjs/toolkit';
import { fetchLeaderboards } from './leaderboardThunk';

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: {
    leaderboards: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaderboards.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLeaderboards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.leaderboards = action.payload;
      })
      .addCase(fetchLeaderboards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default leaderboardSlice.reducer;
