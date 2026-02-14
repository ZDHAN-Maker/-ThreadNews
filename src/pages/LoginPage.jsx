import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../features/auth/authThunk';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ email, password }));
      navigate('/');
    } catch {
      // error sudah di redux
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-start justify-center pt-16">
      <div className="w-full max-w-md">

        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        {isLoading && (
          <p className="text-gray-500 text-sm mb-3">Loading...</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring-1 focus:ring-slate-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring-1 focus:ring-slate-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-slate-700 text-white py-2 rounded-sm hover:bg-slate-800 transition"
          >
            Login
          </button>

        </form>

        <p className="mt-4 text-sm text-gray-700">
          Belum punya akun?{' '}
          <Link
            to="/register"
            className="text-blue-600 hover:underline"
          >
            Daftar di sini.
          </Link>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;
