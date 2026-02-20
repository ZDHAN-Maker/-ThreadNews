import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addThread } from '../features/threads/threadsThunk';

function NewPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addThread({ title, category, body }))
      .unwrap()
      .then(() => navigate('/'));
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Buat Diskusi Baru</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Judul"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Kategori"
          className="w-full border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <textarea
          placeholder="Isi diskusi"
          className="w-full border p-2 rounded h-32"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-700"
        >
          Buat
        </button>
      </form>
    </div>
  );
}

export default NewPage;