import Sidebar from '../components/sidebar/Sidebar';
import React from 'react';
import FeatureCards from '../components/cards/fcards';
import Chatbot from '../components/chatbot/Chatbot';
import vector from '../Assets/home_new.png';
import Cookies from 'js-cookie';
import '../CSS/home.css';
import MapComponent from '../components/map/map';

function HomeNew() {
    const username = Cookies.get('username') || 'Guest';

    return (
        <div className="home-container">
            <Sidebar />
            <div className="main-container-new">
                <div className="illustration-container">
                    <img
                        src={vector}
                        alt="Background"
                    />
                    <div className="overlay-text">
                        Welcome, {username}! Your go-to hub for disaster preparedness, response, and recovery. Stay informed, stay safe!
                    </div>
                </div>
                <div className="main-content">
                    <h1>DASHBOARD</h1>
                    <FeatureCards />
                    {/* <Chatbot /> */}
                </div>
                {/* <div className="map-container">
                    <MapComponent />
                </div> */}
            </div>
        </div>
    );
}

export default HomeNew;
