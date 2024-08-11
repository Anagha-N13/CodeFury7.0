import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import PostList from './postList'; // Corrected path
import './viewpostPage.css';
import Sidebar from '../sidebar/Sidebar';

const connect = require('../../Assets/Ananya/icon/connect.png')

const ViewPostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:9000/api/post/posts');
                setPosts(response.data);
                setFilteredPosts(response.data); // Initialize with all posts
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    useEffect(() => {
        handleSearch(); // Trigger search whenever searchTerm changes
    }, [searchTerm, posts]);

    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            setFilteredPosts(posts);
            return;
        }

        const lowercasedSearchTerm = searchTerm.toLowerCase();
        const filtered = posts.filter(post => {
            // Use caption instead of note
            const captionText = post.caption ? post.caption.toLowerCase() : '';
            const commentsText = post.comments ? post.comments.map(comment => comment.toLowerCase()) : [];

            // Combine caption and comments into a single array
            const searchArray = [captionText, ...commentsText];

            // Check if the search term exists in any of the strings
            return searchArray.some(text => text.includes(lowercasedSearchTerm));
        });

        setFilteredPosts(filtered);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const addComment = async (postId, comment) => {
        const username = Cookies.get('username'); // Assuming the username is stored in a cookie
        try {
            const response = await axios.post(`http://localhost:9000/api/post/posts/${postId}/comments`, { comment, username });
            const updatedPost = response.data;
            setPosts(posts.map(post => post._id === postId ? updatedPost : post));
            // Re-filter posts after adding a comment
            handleSearch();
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <div className='postView-extra'>  
            <div className='sidee'>
                <Sidebar />
            </div>
            <div className='view-posts-page'>
                
                <h1><img className='cn-img'  src={connect} />Connect with People</h1>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    <button onClick={handleSearch} className="search-button-p">Search</button>
                </div>
                <PostList posts={filteredPosts} addComment={addComment} />
            </div>
        </div>
    );
};

export default ViewPostsPage;
