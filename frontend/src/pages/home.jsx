//import React from 'react'
 //import WeatherComponent from '../components/weather'
// import ResourceLocatorPage from './ResourceLocatorPage'
// import WeatherComponent from '../components/weather/weather'
// import MapComponent from '../components/map/map'
// import WeatherComponent from '../components/weather/weather'
import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import '../CSS/home.css';
import vector from '../Assets/home.jpg';
import Chatbot from '../components/chatbot/Chatbot';
import FeatureCards from '../components/cards/fcards';

const Home = ({ username }) => {
    return (
        <div className="home-container">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="main-content">
                {/* Background Image */}
                <img
                    src={vector}
                    alt="Background"
                    className="background-image"
                />

                {/* Overlay Text */}
                <div className="overlay-text">
                Welcome, [username]! Your go-to hub for disaster preparedness, response, and recovery. Stay informed, stay safe!
                </div>
                <Chatbot/>
                
            </div>
        </div>
    );
};

export default Home;
