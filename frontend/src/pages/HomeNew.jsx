import Sidebar from '../components/sidebar/Sidebar';
import React from 'react';
import FeatureCards from '../components/cards/fcards';
import Chatbot from '../components/chatbot/Chatbot';
import '../CSS/home.css';
import MapComponent from '../components/map/map';

function HomeNew() {
    return (
        <div className="home-container">
            <Sidebar />
            <div className="main-container-new">
                <div className="main-content">
                    <h1>DASHBOARD</h1>
                    <FeatureCards />
                    {/* <Chatbot/> */}
                </div>
                <div className="map-container">
                    <MapComponent />
                </div>
            </div>
        </div>
    );
}

export default HomeNew;
