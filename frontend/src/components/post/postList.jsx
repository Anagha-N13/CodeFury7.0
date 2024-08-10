import React from 'react';
import Post from './post'; // Ensure the path is correct
import './PostList.css';

const PostList = ({ posts, addComment }) => {
  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post._id} post={post} addComment={addComment} />) // Ensure post has _id
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default PostList;
