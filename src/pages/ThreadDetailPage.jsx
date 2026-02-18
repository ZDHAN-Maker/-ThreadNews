import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchThreadDetail } from '../features/threadDetail/threadDetailThunk';
import CommentItem from '../components/CommentItem';

function ThreadDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { thread, isLoading, error } = useSelector((state) => state.threadDetail);

  useEffect(() => {
    dispatch(fetchThreadDetail(id));
  }, [dispatch, id]);

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;
  if (!thread) return null;

  return (
    <div className="max-w-3xl mx-auto py-6 px-4">

      {/* CATEGORY */}
      <span className="px-3 py-1 bg-gray-100 border rounded text-sm text-gray-700">
        #{thread.category}
      </span>

      {/* TITLE */}
      <h1 className="text-3xl font-bold mt-3 mb-2 text-gray-900">
        {thread.title}
      </h1>

      {/* INFO */}
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
        <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center font-bold text-xs">
          {thread.owner?.name?.[0] || "?"}
        </div>
        <span>
          Dibuat oleh <strong>{thread.owner.name}</strong>
        </span>
        <span>{new Date(thread.createdAt).toLocaleDateString()}</span>
      </div>

      {/* BODY */}
      <p className="text-gray-800 mb-8 leading-relaxed">
        {thread.body}
      </p>

      {/* COMMENT FORM */}
      <h2 className="font-semibold mb-2">Beri komentar</h2>

      <textarea
        className="w-full border rounded-md h-28 p-3 mb-3"
        placeholder="Tulis komentar..."
      ></textarea>

      <button className="w-full bg-slate-700 text-white py-2 rounded-md">
        Kirim
      </button>

      {/* COMMENT LIST */}
      <h2 className="font-semibold text-lg mt-8 mb-4">
        Komentar ({thread.comments.length})
      </h2>

      {thread.comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}

    </div>
  );
}

export default ThreadDetailPage;
