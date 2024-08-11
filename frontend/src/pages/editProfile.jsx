// src/pages/EditProfile.js
import React, { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar'; // Import the Sidebar component
import '../CSS/editProfile.css'; // Import the CSS file
import Cookies from 'js-cookie';

const EditProfile = () => {
    const [username, setUsername] = useState(Cookies.get('username') || '');

    const handleSave = () => {
        // Save the new username to cookies
        Cookies.set('username', username);
        // Redirect or show success message
    };

    return (
        <div className="edit-profile-container">
            <Sidebar /> {/* Render the Sidebar component */}
            <div className="edit-profile-main-content">
                <h2>Edit Profile</h2>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter new username"
                />
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default EditProfile;
