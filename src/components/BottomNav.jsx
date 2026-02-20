import { Link, useNavigate } from "react-router-dom";
import { FiMessageSquare, FiBarChart2, FiLogIn, FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

function BottomNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/"); // kembali ke home
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full border-t bg-white py-4 
  flex justify-center gap-x-10 text-sm z-50">

      <Link to="/" className="flex flex-col items-center text-gray-700 hover:text-purple-600">
        <FiMessageSquare size={22} />
        <span className="text-xs mt-1">Threads</span>
      </Link>

      <Link to="/leaderboards" className="flex flex-col items-center text-gray-700 hover:text-purple-600">
        <FiBarChart2 size={22} />
        <span className="text-xs mt-1">Leaderboards</span>
      </Link>

      {!token ? (
        <Link
          to="/login"
          className="flex flex-col items-center text-gray-700 hover:text-purple-600"
        >
          <FiLogIn size={22} />
          <span className="text-xs mt-1">Login</span>
        </Link>
      ) : (
        <button
          onClick={handleLogout}
          className="flex flex-col items-center text-gray-700 hover:text-red-600"
        >
          <FiLogOut size={22} />
          <span className="text-xs mt-1">Logout</span>
        </button>
      )}

    </footer>
  );
}

export default BottomNav;
