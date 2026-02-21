import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchThreadDetail, addComment } from '../features/threadDetail/threadDetailThunk';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/id';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

dayjs.extend(relativeTime);
dayjs.locale('id');

function ThreadDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { thread, isLoading, error } = useSelector((state) => state.threadDetail);
  const { user } = useSelector((state) => state.auth);
  const [comment, setComment] = useState('');

  useEffect(() => {
    dispatch(fetchThreadDetail(id));
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!comment.trim()) return;

    dispatch(addComment({ threadId: id, content: comment }));
    setComment('');
  };

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;
  if (!thread) return null;

  return (
    <div className="w-full flex flex-col min-h-full pb-24">
      {/* CONTENT */}
      <div className="flex-1">
        <span className="px-3 py-1 bg-gray-100 border rounded text-sm text-gray-700">
          #{thread.category}
        </span>

        <h1 className="text-3xl font-bold mt-4 mb-3 text-gray-900">
          {thread.title}
        </h1>

        <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center font-bold text-xs">
            {thread.owner?.name?.[0] || '?'}
          </div>

          <span>
            Dibuat oleh <strong>{thread.owner?.name}</strong>
          </span>

          <span>•</span>
          <span>{dayjs(thread.createdAt).fromNow()}</span>
        </div>

        <div
          className="prose max-w-none mb-10"
          dangerouslySetInnerHTML={{ __html: thread.body }}
        />
      </div>

      {/* COMMENT SECTION */}
      <div className="border-t pt-6 mt-auto">
        <h2 className="font-semibold mb-4">
          Komentar ({thread.comments?.length || 0})
        </h2>

        {/* FORM */}
        {!user ? (
          <p className="mb-6 text-gray-800">
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-700 underline font-medium"
            >
              Login
            </Link>{' '}
            untuk memberikan komentar
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mb-8">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border rounded-md h-28 p-3 mb-3"
              placeholder="Tulis komentar..."
            />
            <button
              type="submit"
              disabled={!comment.trim()}
              className="bg-slate-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-md hover:bg-slate-800"
            >
              Kirim
            </button>
          </form>
        )}

        {/* LIST KOMENTAR */}
        <div>
          {thread.comments?.map((item) => (
            <div key={item.id} className="py-4 border-b">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-xs font-bold text-gray-700">
                    {item.owner?.name?.[0] || '?'}
                  </div>

                  <span className="font-semibold text-sm text-gray-800">
                    {item.owner?.name}
                  </span>
                </div>

                <span className="text-sm text-gray-500">
                  {dayjs(item.createdAt).fromNow()}
                </span>
              </div>

              <div
                className="text-sm text-gray-800 mb-3 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <FiThumbsUp size={16} />
                  <span>{item.upVotesBy?.length || 0}</span>
                </div>

                <div className="flex items-center gap-1">
                  <FiThumbsDown size={16} />
                  <span>{item.downVotesBy?.length || 0}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThreadDetailPage;