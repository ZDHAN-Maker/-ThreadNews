function CategorySidebar({ categories }) {
  return (
    <aside className="sidebar">
      <h3>Kategori popular</h3>
      <div className="categories">
        {categories.map((cat) => (
          <span key={cat} className="tag">
            #{cat}
          </span>
        ))}
      </div>
    </aside>
  );
}

export default CategorySidebar;
