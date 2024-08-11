import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import '../CSS/home.css';
import vector from '../Assets/home.jpg';
import Chatbot from '../components/chatbot/Chatbot';
import Cookies from 'js-cookie';
import FeatureCards from '../components/cards/fcards';

const Home = () => {
    const username = Cookies.get('username') || 'Guest';

    return (
        <div className="home-container">
            <Sidebar />

            <div className="main-content-new">
                <img
                    src={vector}
                    alt="Background"
                    className="background-image"
                />

                <div className="overlay-text">
                    Welcome, {username}! Your go-to hub for disaster preparedness, response, and recovery. Stay informed, stay safe!
                </div>
                <Chatbot/>
                
            </div>
        </div>
    );
};

export default Home;
