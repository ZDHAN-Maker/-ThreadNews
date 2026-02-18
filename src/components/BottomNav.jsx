import { Link } from 'react-router-dom';
import { FiMessageSquare, FiBarChart2, FiLogIn } from 'react-icons/fi';

function BottomNav() {
  return (
    <footer className="fixed bottom-0 left-0 w-full border-t bg-white py-4 
  flex justify-center gap-x-6 text-sm z-50">

      <Link to="/" className="flex flex-col items-center text-gray-700 hover:text-purple-600">
        <FiMessageSquare size={22} />
        <span className="text-xs mt-1">Threads</span>
      </Link>

      <Link to="/leaderboards" className="flex flex-col items-center text-gray-700 hover:text-purple-600">
        <FiBarChart2 size={22} />
        <span className="text-xs mt-1">Leaderboards</span>
      </Link>

      <Link to="/login" className="flex flex-col items-center text-gray-700 hover:text-purple-600">
        <FiLogIn size={22} />
        <span className="text-xs mt-1">Login</span>
      </Link>

    </footer>
  );
}

export default BottomNav;
