import React from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';
import { FaHome, FaGlobe, FaUser } from 'react-icons/fa'; // Importing new icons
import { FaTachometerAlt, FaBook, FaBell, FaUsers, FaMapMarkerAlt, FaUpload } from 'react-icons/fa'; // Importing other icons

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">ALERTLY</h2>
            <Nav className="flex-column">
                <Nav.Link href="/home" className="sidebar-item">
                    <FaHome className="sidebar-icon" /> Home
                </Nav.Link>
                <Nav.Link href="/dashboard" className="sidebar-item">
                    <FaTachometerAlt className="sidebar-icon" /> Real-Time Disaster Information
                </Nav.Link>
                <Nav.Link href="/educationalResources" className="sidebar-item">
                    <FaBook className="sidebar-icon" /> Educational Resources
                </Nav.Link>
                <Nav.Link href="/info" className="sidebar-item">
                    <FaBell className="sidebar-icon" /> Know More About Disasters
                </Nav.Link>
                <Nav.Link href="/posts" className="sidebar-item">
                    <FaUsers className="sidebar-icon" /> Community
                </Nav.Link>
                <Nav.Link href="/locator" className="sidebar-item">
                    <FaMapMarkerAlt className="sidebar-icon" /> Resource Locator
                </Nav.Link>
                <Nav.Link href="/post" className="sidebar-item">
                    <FaUpload className="sidebar-icon" /> Upload Experience
                </Nav.Link>

                <Nav.Link href="/map" className="sidebar-item">
                    <FaGlobe className="sidebar-icon" /> Locate Disasters
                </Nav.Link>
                <Nav.Link href="/profile" className="sidebar-item">
                    <FaUser className="sidebar-icon" /> Profile
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;
