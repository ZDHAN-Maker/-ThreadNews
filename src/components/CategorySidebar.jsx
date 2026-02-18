function CategorySidebar({ categories }) {
  return (
    <aside className="mb-6">
      <h3 className="text-gray-700 font-medium mb-2">Kategori popular</h3>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <span
            key={cat}
            className="px-3 py-1 bg-gray-100 border rounded-md text-sm text-gray-700"
          >
            #{cat}
          </span>
        ))}
      </div>
    </aside>
  );
}

export default CategorySidebar;
