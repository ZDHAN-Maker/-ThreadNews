import { Link } from "react-router-dom";
import { FiThumbsUp, FiMessageSquare } from "react-icons/fi";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/id";

dayjs.extend(relativeTime);
dayjs.locale("id");

function ThreadItem({ thread }) {
  return (
    <Link
      to={`/thread/${thread.id}`}
      className="block border-b pb-5 mb-6 hover:bg-gray-50 transition rounded-lg p-3"
    >
      {/* TAG */}
      <span className="px-3 py-1 bg-gray-100 border rounded text-sm text-gray-700">
        #{thread.category}
      </span>

      {/* TITLE */}
      <h3 className="text-xl text-gray-800 font-semibold mt-3 hover:underline">
        {thread.title}
      </h3>

      {/* BODY (HTML parsed + dipotong) */}
      <div
        className="text-gray-700 mt-2 line-clamp-3"
        dangerouslySetInnerHTML={{
          __html: thread.body,
        }}
      />

      {/* FOOTER */}
      <div className="flex items-center gap-5 mt-4 text-sm text-gray-500">

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
        <span>
          {dayjs(thread.createdAt).fromNow()}
        </span>

        {/* Owner */}
        <span>
          Dibuat oleh <span className="font-semibold">{thread.owner?.name}</span>
        </span>

      </div>
    </Link>
  );
}

export default ThreadItem;
