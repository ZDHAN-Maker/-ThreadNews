function ThreadItem({ thread }) {
  return (
    <div className="border-b pb-4 mb-6">
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
      <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
        <span>👍 {thread.upVotesBy.length}</span>
        <span>💬 {thread.totalComments}</span>
        <span>{new Date(thread.createdAt).toLocaleDateString()}</span>
        <span className="font-semibold">Dibuat oleh {thread.ownerId}</span>
      </div>
    </div>
  );
}

export default ThreadItem;
