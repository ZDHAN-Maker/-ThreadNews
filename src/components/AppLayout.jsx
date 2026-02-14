import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { asyncUnsetAuthUser } from '../states//authUser/action';

function AppLayout({ children }) {
    const authUser = useSelector((state) => state.authUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogout = () => {
        dispatch(asyncUnsetAuthUser());
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <header className="bg-slate-700 text-white px-6 py-4 shadow">
                <h1 className="text-lg font-semibold">
                    DICODING FORUM APP
                </h1>
            </header>
            <main className="flex-1 max-w-4xl mx-auto w-full p-6 pb-24">
                {children}
            </main>
            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-inner">
                <div className="max-w-4xl mx-auto flex justify-around py-3 text-sm">
                    <Link
                        to="/"
                        className="flex flex-col items-center text-gray-600 hover:text-slate-700"
                    >
                        <span>Threads</span>
                    </Link>

                    <Link
                        to="/leaderboards"
                        className="flex flex-col items-center text-gray-600 hover:text-slate-700"
                    >
                        <span>Leaderboards</span>
                    </Link>

                    {authUser ? (
                        <button
                            onClick={onLogout}
                            className="flex flex-col items-center text-gray-600 hover:text-red-500"
                        >
                            <span>↩</span>
                            <span>Logout</span>
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="flex flex-col items-center text-gray-600 hover:text-slate-700"
                        >
                            <span>Login</span>
                        </Link>
                    )}
                </div>
            </footer>
        </div>
    );
}

export default AppLayout;
