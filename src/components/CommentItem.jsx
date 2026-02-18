function CommentItem({ comment }) {
  return (
    <div className="border-t py-4">

      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">

          {/* Avatar */}
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

      {/* Body */}
      <p className="text-gray-800 ml-10">
        {comment.content}
      </p>

      {/* Votes */}
      <div className="flex items-center gap-4 ml-10 mt-2 text-sm text-gray-600">
        <span>👍 {comment.upVotesBy?.length || 0}</span>
        <span>👎 {comment.downVotesBy?.length || 0}</span>
      </div>

    </div>
  );
}

export default CommentItem;
