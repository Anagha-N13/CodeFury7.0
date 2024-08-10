import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostForm from './postForm';
import PostList from './postList';
import Cookies from 'js-cookie';

const PostPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
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
        const username = Cookies.get('username'); // Assuming you set the username in a cookie during login/registration
        try {
            const response = await axios.post(`http://localhost:9000/api/post/posts/${postId}/comments`, { comment, username });
            const updatedPost = response.data;
            setPosts(posts.map(post => post._id === postId ? updatedPost : post));
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <div>
            <h1>Community Posts</h1>
            <PostForm addPost={addPost} />
            <PostList posts={posts} addComment={addComment} />
        </div>
    );
};

export default PostPage;
