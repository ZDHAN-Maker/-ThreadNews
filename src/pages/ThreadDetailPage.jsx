import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchThreadDetail } from '../features/threadDetail/threadDetailThunk';

function ThreadDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { thread, isLoading, error } = useSelector(
    (state) => state.threadDetail
  );

  useEffect(() => {
    dispatch(fetchThreadDetail(id));
  }, [dispatch, id]);

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;
  if (!thread) return null;

  return (
    <div className="max-w-3xl mx-auto py-6 px-4">
      {/* THREAD */}
      <h1 className="text-2xl font-bold mb-2">
        {thread.title}
      </h1>

      <div className="text-sm text-gray-500 mb-4">
        Dibuat oleh {thread.owner.name} ·{' '}
        {new Date(thread.createdAt).toLocaleDateString()}
      </div>

      <p className="mb-6 text-gray-800">
        {thread.body}
      </p>

      {/* KOMENTAR */}
      <h2 className="font-semibold mb-4">
        Komentar ({thread.comments.length})
      </h2>

      {thread.comments.map((comment) => (
        <div
          key={comment.id}
          className="border-t py-4"
        >
          <p className="text-gray-800">
            {comment.content}
          </p>
          <div className="text-xs text-gray-500 mt-1">
            {comment.owner.name} ·{' '}
            {new Date(comment.createdAt).toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ThreadDetailPage;
