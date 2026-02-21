import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

function CommentItem({ comment }) {
  const isUpvoted = comment.upVotesBy?.length > 0;
  const isDownvoted = comment.downVotesBy?.length > 0;

  return (
    <div className="border-t py-4">

      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center font-bold text-xs">
            {comment.owner.name[0]}
          </div>

          <span className="font-semibold text-gray-800">
            {comment.owner.name}
          </span>
        </div>

        <span className="text-xs text-gray-500">
          {new Date(comment.createdAt).toLocaleDateString()}
        </span>
      </div>

      {/* Content */}
      <p className="text-gray-800 ml-10">{comment.content}</p>

      {/* Icons */}
      <div className="flex items-center gap-4 ml-10 mt-2 text-sm text-gray-600">

        <div className="flex items-center gap-1">
          <FiThumbsUp
            size={16}
            className={isUpvoted ? 'text-blue-600' : ''}
          />
          <span>{comment.upVotesBy?.length || 0}</span>
        </div>

        <div className="flex items-center gap-1">
          <FiThumbsDown
            size={16}
            className={isDownvoted ? 'text-red-600' : ''}
          />
          <span>{comment.downVotesBy?.length || 0}</span>
        </div>

      </div>
    </div>
  );
}

export default CommentItem;