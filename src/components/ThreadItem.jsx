import { Link } from "react-router-dom";
import { FiThumbsUp, FiMessageSquare } from "react-icons/fi";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
function ThreadItem({ thread }) {
  return (
    <Link
      to={`/thread/${thread.id}`}
      className="block border-b pb-4 mb-6 hover:bg-gray-50 transition rounded-lg p-2"
    >
      {/* TAG */}
      <span className="px-3 py-1 bg-gray-100 border rounded text-sm text-gray-700">
        #{thread.category}
      </span>

      {/* TITLE */}
      <h3 className="text-xl text-purple-700 font-semibold mt-2 hover:underline">
        {thread.title}
      </h3>

      {/* BODY */}
      <p className="text-gray-700 mt-1">
        {thread.body.slice(0, 200)}...
      </p>

      {/* FOOTER */}
      <div className="flex items-center gap-5 mt-3 text-sm text-gray-600">

        {/* Likes */}
        <span className="flex items-center gap-1">
          <FiThumbsUp size={18} />
          {thread.upVotesBy.length}
        </span>

        {/* Comments */}
        <span className="flex items-center gap-1">
          <FiMessageSquare size={18} />
          {thread.totalComments}
        </span>

        {/* Date */}
        <span>{new Date(thread.createdAt).toLocaleDateString()}</span>

        {/* Owner */}
        <span className="font-semibold">Dibuat oleh {thread.owner?.name}</span>

      </div>
    </Link>
  );
}

export default ThreadItem;
