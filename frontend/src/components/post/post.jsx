import React, { useState } from 'react';
import './post.css';

const Post = ({ post, addComment }) => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(post._id, comment);
      setComment('');
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <p className="post-username">{post.userName}</p>
        {post.imageUrl && <img src={`http://localhost:5000/${post.imageUrl}`} alt="Post" className="post-image" />}
      </div>
      <p className="post-caption">{post.caption}</p>
      <div className="post-comments">
        {post.comments.length > 0 &&
          post.comments.map((c, index) => (
            <p key={index} className="post-comment">
              {c}
            </p>
          ))}
      </div>
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="comment-input"
        />
        <button type="submit" className="comment-submit-btn">
          Comment
        </button>
      </form>
    </div>
  );
};

export default Post;
