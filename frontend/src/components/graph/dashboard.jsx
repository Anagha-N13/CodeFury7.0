import React, { useState } from 'react';
import { states, disasterData } from './data'; // Adjust the path if needed
import StateList from './Statelist';
import DisasterBarGraph from './disaster';
import './dashboard.css'; // Your custom styles
import Sidebar from '../sidebar/Sidebar';

const Dashboard = () => {
    const [selectedState, setSelectedState] = useState(states[0]); // Default to the first state

    const handleStateClick = (state) => {
        setSelectedState(state);
    };

    const dataForState = disasterData[selectedState] || {};

    return (

        <div className='dash-extra'>

        <Sidebar />
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Disaster Analysis Dashboard</h1>
                <p>Select a state to view detailed disaster data.</p>
            </div>
            <div className="dashboard-content">
                <StateList states={states} onStateClick={handleStateClick} selectedState={selectedState} />
                <DisasterBarGraph data={dataForState} state={selectedState} />
            </div>
        </div>
        </div>
    );
};

export default Dashboard;
