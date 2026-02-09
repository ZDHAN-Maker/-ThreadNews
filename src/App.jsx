import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { fetchOwnProfile } from './features/auth/authThunk';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { logout } from './features/auth/authSlice';

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchOwnProfile());
  }, [dispatch]);

  return (
    <BrowserRouter>
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-4 bg-slate-800 text-white">
        <Link to="/" className="font-bold text-lg">
          DICODING FORUM APP
        </Link>

        <div className="flex gap-4 items-center">
          {!user && (
            <>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/register" className="hover:underline">
                Register
              </Link>
            </>
          )}

          {user && (
            <>
              <span>Halo, {user.name}</span>
              <button
                onClick={() => dispatch(logout())}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
