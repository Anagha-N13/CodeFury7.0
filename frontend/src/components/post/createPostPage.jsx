import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import './createPost.css';

const CreatePostPage = () => {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const username = Cookies.get('username'); // Assuming the username is stored in a cookie

        if (caption.trim() || image) {
            const formData = new FormData();
            formData.append('caption', caption);
            formData.append('username', username);
            if (image) {
                formData.append('image', image);
            }

            try {
                await axios.post('http://localhost:9000/api/post/posts', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                setCaption('');
                setImage(null);
                alert('Post added successfully!');
            } catch (err) {
                setError('Failed to create post. Please try again.');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="post-form-container">
            <h2>Share Your Experience</h2>
            <form onSubmit={handleSubmit} className="post-form">
                <textarea
                    placeholder="What's on your mind?"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="post-caption"
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="post-image-input"
                />
                <button type="submit" className="post-submit-btn" disabled={loading}>
                    {loading ? 'Posting...' : 'Post'}
                </button>
            </form>
            {error && <p className="post-error">{error}</p>}
        </div>
    );
};

export default CreatePostPage;
