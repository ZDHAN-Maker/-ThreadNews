import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { fetchOwnProfile } from './features/auth/authThunk';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchOwnProfile());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{' '}
        {user ? <span>Halo, {user.name}</span> : <Link to="/login">Login</Link>}
      </nav>

      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<h1>Home Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
