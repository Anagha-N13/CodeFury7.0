import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/home';
import Dashboard from '../components/graph/dashboard';
import ResourceLocatorPage from '../pages/ResourceLocatorPage';
// import ResourceDetailsPage from './pages/ResourceDetailsPage';
import MapComponent from '../components/map/map';
import WeatherComponent from '../components/weather/weather';
import DisasterInfo from '../components/info/info';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/map" element={<MapComponent />} />
                <Route path="/weather" element={<WeatherComponent />} />
                <Route path="/locator" element={<ResourceLocatorPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/info" element={<DisasterInfo />} />
                {/* <Route path="/resource/:id" element={<ResourceDetailsPage />} /> */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
