import { Link } from 'react-router-dom';

function BottomNav() {
  return (
    <footer className="bottom-nav">
      <Link to="/">Threads</Link>
      <Link to="/leaderboards">Leaderboards</Link>
      <Link to="/logout">Logout</Link>
    </footer>
  );
}

export default BottomNav;
