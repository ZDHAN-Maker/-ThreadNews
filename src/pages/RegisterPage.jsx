import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../features/auth/authThunk';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(registerUser({ name, email, password }));
      navigate('/login');
    } catch {
      // error sudah ditangani redux
    }
  };

  return (
    <div>
      <h2>Register</h2>

      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={isLoading}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
