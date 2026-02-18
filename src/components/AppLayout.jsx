import React from 'react';
import { useSelector } from 'react-redux';
import BottomNav from './BottomNav';
function AppLayout({ children }) {
  const authUser = useSelector((state) => state.authUser);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* HEADER */}
      <header className="bg-slate-700 text-white px-6 py-4 shadow">
        <h1 className="text-lg font-semibold">
          DICODING FORUM APP
        </h1>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-4xl mx-auto w-full p-6 pb-24">
        {children}
      </main>

      {/* BOTTOM NAV */}
      <BottomNav authUser={authUser} />
    </div>
  );
}

export default AppLayout;
