import { Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import Threads from './pages/ThreadDetailPage';
import Leaderboards from './pages/LeaderboardPage';

function App() {
  return (
    <Routes>
      {/* Routing utama berada dalam AppLayout */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Threads />} />
        <Route path="leaderboards" element={<Leaderboards />} />
      </Route>

      {/* Login berada di luar layout */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
