import { useSelector } from 'react-redux';
import BottomNav from './BottomNav';

function AppLayout({ children }) {
  const authUser = useSelector((state) => state.authUser);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* HEADER FIXED */}
      <header className="bg-slate-700 text-white py-4 fixed top-0 left-0 w-full z-50">
        <div className="max-w-4xl px-6">
          <h1 className="text-lg font-semibold">DICODING FORUM APP</h1>
        </div>
      </header>

      {/* Spacer supaya konten tidak ketiban header */}
      <div className="h-16" />

      {/* MAIN */}
      <main className="flex-1 w-full flex justify-center">
        <div className="w-full max-w-4xl bg-white px-8 py-6">{children}</div>
      </main>

      {/* BOTTOM NAV */}
      <div className="bg-white border-t">
        <div className="max-w-4xl mx-auto">
          <BottomNav authUser={authUser} />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
