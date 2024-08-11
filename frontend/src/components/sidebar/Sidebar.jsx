import React from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css'; 
import { FaTachometerAlt, FaBook, FaBell, FaUsers, FaMapMarkerAlt, FaUpload, FaCog } from 'react-icons/fa'; // Importing icons

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">Dashboard</h2>
            <Nav className="flex-column">
                <Nav.Link href="/dashboard" className="sidebar-item">
                    <FaTachometerAlt className="sidebar-icon" /> Real-Time Disaster Information
                </Nav.Link>
                <Nav.Link href="/educationalResources" className="sidebar-item">
                    <FaBook className="sidebar-icon" /> Educational Resources
                </Nav.Link>
                <Nav.Link href="/info" className="sidebar-item">
                    <FaBell className="sidebar-icon" /> Alerts and Notifications
                </Nav.Link>
                <Nav.Link href="/community" className="sidebar-item">
                    <FaUsers className="sidebar-icon" /> Community
                </Nav.Link>
                <Nav.Link href="/locator" className="sidebar-item">
                    <FaMapMarkerAlt className="sidebar-icon" /> Resource Locator
                </Nav.Link>

                {/* Experience Section */}
                <div className="sidebar-section">
                    <h3 className="sidebar-subtitle">Experience</h3>
                    <Nav className="flex-column">
                        <Nav.Link href="/post" className="sidebar-item">
                            <FaUpload className="sidebar-icon" /> Upload Experience
                        </Nav.Link>
                        <Nav.Link href="/posts" className="sidebar-item">
                            <FaCog className="sidebar-icon" /> Manage Experience
                        </Nav.Link>
                    </Nav>
                </div>
            </Nav>
        </div>
    );
};

export default Sidebar;
