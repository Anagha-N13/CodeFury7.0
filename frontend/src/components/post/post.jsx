import React, { useState } from 'react';
import './post.css'; // Ensure CSS file is correctly linked

const Post = ({ post, addComment }) => {
    const [comment, setComment] = useState('');

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            addComment(post._id, comment);
            setComment('');
        }
        // const username = Cookies.get('username');
        // console.log(username);
    };
    

    return (
        <div className="post">
            <div className="post-header">
                <p className="post-username">{post.userName}</p>
                {/* {post.imageUrl && <img src={`http://localhost:9000/${post.imageUrl}`} alt="Post" className="post-image" />} */}

            </div>
            <p className="post-caption">{post.caption}</p>
            <div className="post-comments">
                {post.comments.length > 0 ? (
                    post.comments.map((c, index) => (
                        <div key={index} className="post-comment">
                            <span>{c}</span>
                        </div>
                    ))
                ) : (
                    <p>No comments yet.</p>
                )}
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
