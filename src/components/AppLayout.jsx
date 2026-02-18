import { useSelector } from 'react-redux';
import BottomNav from './BottomNav';

function AppLayout({ children }) {
  const authUser = useSelector((state) => state.authUser);

  return (
    <div className="h-screen flex flex-col bg-gray-100 overflow-hidden">
      
      {/* HEADER */}
      <header className="bg-slate-700 text-white px-6 py-4 shadow flex-shrink-0">
        <h1 className="text-lg font-semibold">
          DICODING FORUM APP
        </h1>
      </header>

      {/* MAIN CONTENT (fixed + tidak scroll) */}
      <main className="flex-1 max-w-4xl mx-auto w-full p-6 overflow-hidden">
        {children}
      </main>

      {/* BOTTOM NAV FIXED */}
      <BottomNav authUser={authUser} />
    </div>
  );
}

export default AppLayout;
