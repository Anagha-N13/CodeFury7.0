// src/components/Dashboard.js

import React, { useState } from 'react';
import { states, disasterData } from './data'; // Adjust the path if needed
import StateList from './Statelist';
import DisasterBarGraph from './disaster';
import './dashboard.css'; // Your custom styles

const Dashboard = () => {
    const [selectedState, setSelectedState] = useState('');

    const handleStateClick = (state) => {
        setSelectedState(state);
    };

    const dataForState = disasterData[selectedState] || {};

    return (
        <div className="dashboard-container">
            <StateList states={states} onStateClick={handleStateClick} />
            <DisasterBarGraph data={dataForState} />
        </div>
    );
};

export default Dashboard;
