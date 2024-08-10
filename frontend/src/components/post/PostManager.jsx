import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './postList'; // Ensure the path is correct
import PostForm from './postForm'; // Ensure the path is correct


const PostManager = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts when the component mounts
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:9000/api/post/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const addPost = (newPost) => {
        setPosts([newPost, ...posts]);
    };

    const addComment = async (postId, comment) => {
        try {
            const response = await axios.post(`http://localhost:9000/api/post/posts/${postId}/comments`, { comment });
            const updatedPost = response.data;
            setPosts(posts.map(post => (post._id === updatedPost._id ? updatedPost : post)));
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <div className="post-manager">
            <h2>Post Manager</h2>
            <PostForm addPost={addPost} />
            <PostList posts={posts} addComment={addComment} />
        </div>
    );
};

export default PostManager;
