import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchThreads } from "../features/threads/threadsThunk";
import ThreadItem from "../components/ThreadItem";
import CategorySidebar from "../components/CategorySidebar";

function HomePage() {
    const dispatch = useDispatch();
    const { threads, isLoading, error } = useSelector(
        (state) => state.threads
    );

    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        dispatch(fetchThreads());
    }, [dispatch]);

    const categories = [...new Set(threads.map((t) => t.category))];

    const filteredThreads = selectedCategory
        ? threads.filter((thread) => thread.category === selectedCategory)
        : threads;

    return (
        <div className="w-full">

            <section className="mb-6">
                <CategorySidebar
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
            </section>

            <h2 className="font-semibold mb-4">
                {selectedCategory
                    ? `Kategori: #${selectedCategory}`
                    : "Diskusi tersedia"}
            </h2>

            {isLoading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <div className="space-y-4">
                {filteredThreads.map((thread) => (
                    <ThreadItem key={thread.id} thread={thread} />
                ))}
            </div>

        </div>
    );
}


export default HomePage;
