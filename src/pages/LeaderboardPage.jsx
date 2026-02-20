import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeaderboards } from '../features/leaderboard/leaderboardThunk';

function LeaderboardPage() {
  const dispatch = useDispatch();
  const { leaderboards, isLoading, error } = useSelector((state) => state.leaderboard);

  useEffect(() => {
    dispatch(fetchLeaderboards());
  }, [dispatch]);

  if (isLoading) {
    return <p className="p-6">Loading...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-500">{error}</p>;
  }

  return (
    <div className="w-full max-w-3xl mx-auto pb-24">
      <h1 className="text-2xl font-semibold mb-6">Klasemen Pengguna Aktif</h1>

      <div className="flex justify-between text-gray-500 font-medium border-b pb-2 mb-4">
        <span>Pengguna</span>
        <span>Skor</span>
      </div>

      <div className="space-y-4">
        {leaderboards.map(({ user, score }) => (
          <div key={user.id} className="flex justify-between items-center">
            {/* Kiri */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
                {user.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()}
              </div>

              <span className="text-gray-800 font-medium">{user.name}</span>
            </div>

            {/* Kanan */}
            <span className="text-lg font-semibold text-gray-700">{score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaderboardPage;
