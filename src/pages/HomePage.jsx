import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchThreads } from '../features/threads/threadsThunk';
import ThreadItem from '../components/ThreadItem';
import CategorySidebar from '../components/CategorySidebar';

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { threads, isLoading, error } = useSelector((state) => state.threads);
  const { user } = useSelector((state) => state.auth);

  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(fetchThreads());
  }, [dispatch]);

  const categories = [...new Set(threads.map((t) => t.category))];

  const filteredThreads = selectedCategory
    ? threads.filter((thread) => thread.category === selectedCategory)
    : threads;

  return (
    <div className="w-full relative pb-20">
      {/* Sidebar Kategori */}
      <section className="mb-6">
        <CategorySidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </section>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">
          {selectedCategory ? `Kategori: #${selectedCategory}` : 'Diskusi tersedia'}
        </h2>
      </div>

      {/* Loading */}
      {isLoading && <p className="text-gray-600 animate-pulse">Loading...</p>}

      {/* Error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* List Thread */}
      <div className="space-y-4">
        {!isLoading && filteredThreads.length === 0 && (
          <p className="text-gray-500">Tidak ada diskusi.</p>
        )}

        {filteredThreads.map((thread) => (
          <ThreadItem key={thread.id} thread={thread} />
        ))}
      </div>

      {/* TOMBOL '+' DI KANAN BAWAH */}
      {user && (
        <button
          onClick={() => navigate('/new')}
          className="fixed bottom-24 right-6 w-14 h-14 bg-gray-600 text-white text-3xl 
                     rounded-full shadow-lg flex items-center justify-center 
                     hover:bg-gray-700 transition-all"
          title="Buat Diskusi Baru"
        >
          +
        </button>
      )}
    </div>
  );
}

export default HomePage;