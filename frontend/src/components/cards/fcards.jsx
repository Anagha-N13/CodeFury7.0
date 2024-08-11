import React from 'react';
import './fcards.css'; // Make sure to include your CSS file

const FeatureCards = () => {
    return (
        <div className="feature-cards-container">
            <div className="feature-card" >
                <div className="icon">☀️</div>
                <div className="title">Weather Forecast</div>
                <div className="description">
                    Get up-to-date weather forecasts tailored to your location to stay prepared for any weather conditions.
                </div>
                <a href="/map" className="button">Check Forecast</a>
            </div>

            <div className="feature-card" >
                <div className="icon">📍</div>
                <div className="title">Resource Locator</div>
                <div className="description">
                    Find nearby emergency resources, shelters, and support services quickly and easily.
                </div>
                <a href="/locator" className="button">Find Resources</a>
            </div>

            <div className="feature-card" >
                <div className="icon">🔔</div>
                <div className="title">Real-Time Alerts</div>
                <div className="description">
                    Receive instant notifications about disasters and severe weather conditions affecting your area.
                </div>
                <a href="/map" className="button">View Alerts</a>
            </div>

            <div className="feature-card">
                <div className="icon">🗨️</div>
                <div className="title">Share Experience</div>
                <div className="description">
                    Share your experiences and provide valuable insights to the community to help others stay informed.
                </div>
                <a href="/post" className="button">Post Now</a>
            </div>

            <div className="feature-card" >
                <div className="icon">👁️</div>
                <div className="title">View Experiences</div>
                <div className="description">
                    Browse and read experiences shared by other users to gain insights and tips on disaster preparedness.
                </div>
                <a href="/posts" className="button">Explore Posts</a>
            </div>

            <div className="feature-card">
                <div className="icon">📚</div>
                <div className="title">Disaster Information</div>
                <div className="description">
                    Access comprehensive information about various types of disasters and how to prepare and respond effectively.
                </div>
                <a href="/info" className="button">Learn More</a>
            </div>
        </div>
    );
};

export default FeatureCards;
