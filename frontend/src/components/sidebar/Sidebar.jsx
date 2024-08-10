import React from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css'; 
import { FaTachometerAlt, FaBook, FaBell, FaUsers, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">Dashboard</h2>
            <Nav className="flex-column">
                <Nav.Link href="/real-time-dashboard" className="sidebar-item">
                    <FaTachometerAlt className="sidebar-icon" /> Real-Time Disaster Information
                </Nav.Link>
                <Nav.Link href="/educational-resources" className="sidebar-item">
                    <FaBook className="sidebar-icon" /> Educational Resources
                </Nav.Link>
                <Nav.Link href="/alerts-notifications" className="sidebar-item">
                    <FaBell className="sidebar-icon" /> Alerts and Notifications
                </Nav.Link>
                <Nav.Link href="/community" className="sidebar-item">
                    <FaUsers className="sidebar-icon" /> Community
                </Nav.Link>
                <Nav.Link href="/resource-locator" className="sidebar-item">
                    <FaMapMarkerAlt className="sidebar-icon" /> Resource Locator
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;
