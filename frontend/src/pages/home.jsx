// src/pages/Home.js
import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import '../CSS/homeOld.css';
import vector from '../Assets/home.jpg';
import Chatbot from '../components/chatbot/Chatbot';
import Cookies from 'js-cookie';
import FeatureCards from '../components/cards/fcards';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Home = () => {
    const username = Cookies.get('username') || 'Guest';
    const navigate = useNavigate(); // Initialize useNavigate for redirection

    const handleEditProfile = () => {
        // Redirect to the profile edit page
        navigate('/edit-profile');
    };

    const handleLogout = () => {
        // Remove user information from cookies
        Cookies.remove('username');
        Cookies.remove('authToken');
        
        // Redirect to the login page
        navigate('/login');
    };

    return (
        <div className="home-container">
            <Sidebar />
            <div className="main-content-1">
                <div className="profile-settings">
                    <h2>Profile Settings</h2>
                    <p>Username: {username}</p>
                    <button className="profile-button" onClick={handleEditProfile}>Edit Profile</button>
                    <button className="profile-button" onClick={handleLogout}>Logout</button>
                </div>
                <div className="chatbot-container">
                    <Chatbot />
                </div>
            </div>
        </div>
    );
};

export default Home;
