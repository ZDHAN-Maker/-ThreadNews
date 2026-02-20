import { useSelector } from 'react-redux';
import BottomNav from './BottomNav';

function AppLayout({ children }) {
  const authUser = useSelector((state) => state.authUser);

  return (
    <div className="h-screen flex flex-col">

      {/* HEADER */}
      <header className="bg-slate-700 text-white w-full py-4 shrink-0">
        <div className="max-w-4xl px-6 mx-auto">
          <h1 className="text-lg font-semibold">DICODING FORUM APP</h1>
        </div>
      </header>

      {/* MAIN AREA */}
      <main className="flex-1 flex justify-center items-center overflow-y-auto">
        <div className="w-full max-w-4xl bg-white shadow px-8 py-6 min-h-full">
          {children}
        </div>
      </main>

      {/* BOTTOM NAV */}
      <div className="bg-white border-t shrink-0">
        <div className="max-w-4xl mx-auto">
          <BottomNav authUser={authUser} />
        </div>
      </div>

    </div>
  );
}

export default AppLayout;
