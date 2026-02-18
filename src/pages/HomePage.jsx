import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchThreads } from '../features/threads/threadsThunk';
import ThreadItem from '../components/ThreadItem';
import CategorySidebar from '../components/CategorySidebar';

function HomePage() {
    const dispatch = useDispatch();

    const { threads, isLoading, error } = useSelector((state) => state.threads);

    useEffect(() => {
        dispatch(fetchThreads());
    }, [dispatch]);

    // Ambil kategori unik dari semua thread
    const categories = [...new Set(threads.map((t) => t.category))];

    return (
        <div className="w-full flex justify-center bg-gray-50 h-screen overflow-hidden">
            {/* WRAPPER */}
            <div className="max-w-3xl w-full p-6">

                {/* CATEGORY SIDEBAR */}
                <section className="mb-6">
                    <CategorySidebar categories={categories} />
                </section>

                {/* THREAD LIST */}
                <h2 className="font-semibold mb-4">Diskusi tersedia</h2>

                {isLoading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}

                {threads.map((thread) => (
                    <ThreadItem key={thread.id} thread={thread} />
                ))}

            </div>
        </div>
    );
}

export default HomePage;
