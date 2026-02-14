import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboards" element={<LeaderboardPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
