import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import threadsReducer from '../features/threads/threadsSlice';
import threadDetailReducer from '../features/threadDetail/threadDetailSlice';
import leaderboardReducer from '../features/leaderboard/leaderboardSlice';
import authUserReducer from '../states/authUser/reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    leaderboard: leaderboardReducer,
    authUser: authUserReducer,
  },
});
