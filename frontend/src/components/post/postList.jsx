import React from 'react';
import Post from './post';

const PostList = ({ posts, addComment }) => {
    return (
        <div className="post-list">
            {posts.length > 0 ? (
                posts.map((post) => (
                    <Post key={post._id} post={post} addComment={addComment} />
                ))
            ) : (
                <p>No posts available.</p>
            )}
        </div>
    );
};

export default PostList;
