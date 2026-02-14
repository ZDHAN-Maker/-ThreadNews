import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';

function LeaderboardPage() {
  const dispatch = useDispatch();
  const { leaderboards = [] } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">
        Klasmen Pengguna Aktif
      </h1>

      <div className="flex justify-between text-gray-500 font-medium border-b pb-2 mb-4">
        <span>Pengguna</span>
        <span>Skor</span>
      </div>

      <div className="space-y-4">
        {leaderboards.map(({ user, score }) => (
          <div
            key={user.id}
            className="flex justify-between items-center"
          >
            {/* Kiri - Avatar + Nama */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
                {user.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()}
              </div>

              <span className="text-gray-800 font-medium">
                {user.name}
              </span>
            </div>

            {/* Kanan - Skor */}
            <span className="text-lg font-semibold text-gray-700">
              {score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaderboardPage;
