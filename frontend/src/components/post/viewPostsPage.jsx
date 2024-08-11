import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import PostList from './postList'; // Corrected path
import './viewpostPage.css';

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

    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            setFilteredPosts(posts);
            return;
        }
        
        const lowercasedSearchTerm = searchTerm.toLowerCase();
        const filtered = posts.filter(post => {
            const noteMatch = post.note ? post.note.toLowerCase().includes(lowercasedSearchTerm) : false;
            const commentsMatch = post.comments && post.comments.some(comment => comment.toLowerCase().includes(lowercasedSearchTerm));
            return noteMatch || commentsMatch;
        });
        setFilteredPosts(filtered);
    };

    const addComment = async (postId, comment) => {
        const username = Cookies.get('username'); // Assuming the username is stored in a cookie
        try {
            const response = await axios.post(`http://localhost:9000/api/post/posts/${postId}/comments`, { comment, username });
            const updatedPost = response.data;
            setPosts(posts.map(post => post._id === postId ? updatedPost : post));
            // Re-filter posts after adding a comment
            setFilteredPosts(posts.map(post => post._id === postId ? updatedPost : post));
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <div className='view-posts-page'>
            <h1>Community Posts</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button-p">Search</button>
            </div>
            <PostList posts={filteredPosts} addComment={addComment} />
        </div>
    );
};

export default ViewPostsPage;
