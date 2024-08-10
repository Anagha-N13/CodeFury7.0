import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/home';
import Dashboard from '../components/graph/dashboard';
import ResourceLocatorPage from '../pages/ResourceLocatorPage';
// import ResourceDetailsPage from './pages/ResourceDetailsPage';
import MapComponent from '../components/map/map';
import WeatherComponent from '../components/weather/weather';
import DisasterInfo from '../components/info/info';
import EducationalResources from '../pages/EducationalResources';
import Register from '../pages/Register';
import Login from '../pages/Login';
//import PostList from '../components/post/postList';
import PostForm from '../components/post/postForm';
import Post from '../components/post/post';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/map" element={<MapComponent />} />
                <Route path="/weather" element={<WeatherComponent />} />
                <Route path="/locator" element={<ResourceLocatorPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/info" element={<DisasterInfo />} />
                <Route path="/educationalResources" element={<EducationalResources />} />
                <Route path="/posts" element={<Post />} />
                <Route path="/post" element={<PostForm />} />
                {/* <Route path="/resource/:id" element={<ResourceDetailsPage />} /> */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
