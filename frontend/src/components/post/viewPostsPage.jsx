// src/pages/ViewPostsPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import PostList from './postList'; // Corrected path
import './viewpostPage.css'

const ViewPostsPage = () => {
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

    const addComment = async (postId, comment) => {
        const username = Cookies.get('username'); // Assuming the username is stored in a cookie
        try {
            const response = await axios.post(`http://localhost:9000/api/post/posts/${postId}/comments`, { comment, username });
            const updatedPost = response.data;
            setPosts(posts.map(post => post._id === postId ? updatedPost : post));
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <div className='view-posts-page'>
            <h1>Community Posts</h1>
            <PostList posts={posts} addComment={addComment} />
        </div>
    );
};

export default ViewPostsPage;
