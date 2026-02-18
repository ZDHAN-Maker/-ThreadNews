function ThreadItem({ thread }) {
  return (
    <div className="thread-item">
      <span className="tag">#{thread.category}</span>

      <h3 className="thread-title">{thread.title}</h3>
      <p className="thread-body">
        {thread.body.slice(0, 120)}...
      </p>

      <div className="thread-footer">
        <span>👍 {thread.upVotesBy.length}</span>
        <span>💬 {thread.totalComments}</span>
        <span>
          {new Date(thread.createdAt).toLocaleDateString()}
        </span>
        <span>Dibuat oleh {thread.ownerId}</span>

      </div>
    </div>
  );
}

export default ThreadItem;
