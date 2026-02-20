function CategorySidebar({ categories, selectedCategory, onSelectCategory }) {
  return (
    <aside className="mb-6">
      <h3 className="text-gray-700 font-medium mb-2">Kategori popular</h3>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(selectedCategory === cat ? null : cat)}
            className={`px-3 py-1 border rounded-md text-sm 
              ${selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            #{cat}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default CategorySidebar;
