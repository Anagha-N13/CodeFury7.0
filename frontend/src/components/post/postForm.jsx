import React, { useState } from 'react';
import axios from 'axios';
import './postForm.css';

const PostForm = ({ addPost }) => {
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

    if (caption.trim() || image) {
      const formData = new FormData();
      formData.append('caption', caption);
      if (image) {
        formData.append('image', image);
      }

      try {
        const response = await axios.post('http://localhost:9000/api/post/posts', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const newPost = response.data;
        addPost(newPost); // Add the new post to the state
        setCaption('');
        setImage(null);
      } catch (err) {
        console.log(err)
        setError('Failed to create post. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="post-form-container">
      <form onSubmit={handleSubmit} className="post-form">
        <h2>Share your Experience</h2>
        <textarea
          placeholder="What's on your mind?"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="post-caption"
        />
        <input type="file" accept="image/*" onChange={handleImageChange} className="post-image-input" />
        <button type="submit" className="post-submit-btn" disabled={loading}>
          {loading ? 'Posting...' : 'Post'}
        </button>
      </form>
      {error && <p className="post-error">{error}</p>}
    </div>
  );
};

export default PostForm;
