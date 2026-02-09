import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchThreads } from '../features/threads/threadsThunk';

function HomePage() {
    const dispatch = useDispatch();
    const { threads, isLoading, error } = useSelector(
        (state) => state.threads
    );

    useEffect(() => {
        dispatch(fetchThreads());
    }, [dispatch]);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* MAIN CONTENT */}
            <div className="flex flex-1 max-w-6xl mx-auto w-full">

                {/* LEFT SIDEBAR */}
                <aside className="w-1/4 p-6 hidden md:block"></aside>

                {/* CENTER CONTENT */}
                <main className="w-full md:w-2/4 bg-white px-6 py-6 border-x">
                    {/* KATEGORI */}
                    <section className="mb-6">
                        <h3 className="text-sm text-gray-500 mb-2">
                            Kategori popular
                        </h3>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 border rounded-full text-sm">
                                #redux
                            </span>
                            <span className="px-3 py-1 border rounded-full text-sm">
                                #perkenalan
                            </span>
                        </div>
                    </section>

                    {/* THREAD LIST */}
                    <h2 className="font-semibold mb-4">Diskusi tersedia</h2>

                    {isLoading && <p>Loading...</p>}
                    {error && <p className="text-red-500">{error}</p>}

                    {threads.map((thread) => (
                        <div
                            key={thread.id}
                            className="py-4 border-b"
                        >
                            <span className="text-xs px-2 py-1 border rounded">
                                #{thread.category}
                            </span>

                            <h3 className="text-purple-700 font-semibold mt-2 cursor-pointer">
                                {thread.title}
                            </h3>

                            <p className="text-gray-600 text-sm mt-1">
                                {thread.body.slice(0, 120)}...
                            </p>

                            <div className="text-xs text-gray-500 mt-3 flex gap-4 flex-wrap">
                                <span>👍 {thread.upVotesBy.length}</span>
                                <span>💬 {thread.totalComments}</span>
                                <span>
                                    {new Date(thread.createdAt).toLocaleDateString()}
                                </span>
                                <span>Dibuat oleh {thread.ownerId}</span>
                            </div>

                        </div>
                    ))}
                </main>

                {/* RIGHT SIDEBAR */}
                <aside className="w-1/4 p-6 hidden md:block"></aside>
            </div>

            {/* FLOATING ADD BUTTON */}
            <button className="fixed bottom-20 right-6 bg-slate-700 text-white w-12 h-12 rounded-full text-2xl shadow-lg">
                +
            </button>

            {/* BOTTOM NAV */}
            <footer className="border-t bg-white py-3 flex justify-around text-sm">
                <button className="flex flex-col items-center">
                    💬
                    <span>Threads</span>
                </button>
                <button className="flex flex-col items-center">
                    📊
                    <span>Leaderboards</span>
                </button>
                <button className="flex flex-col items-center">
                    🚪
                    <span>Logout</span>
                </button>
            </footer>
        </div>
    );
}

export default HomePage;
