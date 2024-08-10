import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResourceLocatorPage from './pages/ResourceLocatorPage';
import ResourceDetailsPage from './pages/ResourceDetailsPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/locator" element={<ResourceLocatorPage />} />
                <Route path="/resource/:id" element={<ResourceDetailsPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
