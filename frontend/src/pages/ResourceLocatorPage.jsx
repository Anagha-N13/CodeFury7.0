import React, { useState, useEffect } from 'react';
import axios from '../axios/axios'; // Adjust the path to your axios instance
import ResourceMap from '../components/ResourceMap';
import ResourceFilter from '../components/ResourceFilter';
import ResourceList from '../components/ResourceList';
import Sidebar from '../components/sidebar/Sidebar'; // Import the Sidebar component
import '../CSS/resourceAllocator.css'; // Import the CSS file

const ResourceLocatorPage = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [filterType, setFilterType] = useState('');
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCurrentLocation = () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error) => {
                    console.error('Geolocation error:', error);
                    if (error.code === error.PERMISSION_DENIED) {
                        setError('Location access denied. Please enable location services.');
                    } else if (error.code === error.POSITION_UNAVAILABLE) {
                        setError('Location information is unavailable.');
                    } else if (error.code === error.TIMEOUT) {
                        setError('The request to get user location timed out.');
                    } else {
                        setError('An unknown error occurred.');
                    }
                    setLoading(false);
                },
                { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
            );
        };

        getCurrentLocation();
    }, []);

    useEffect(() => {
        const fetchResources = async () => {
            if (latitude !== null && longitude !== null) {
                setLoading(true);
                try {
                    const response = await axios.get('/resources/nearby', {
                        params: {
                            lat: latitude,
                            lon: longitude,
                            type: filterType
                        }
                    });
                    setResources(response.data);
                } catch (error) {
                    setError('Failed to fetch resources');
                    console.error('Error fetching resources:', error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchResources();
    }, [latitude, longitude, filterType]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="resource-locator-page">
            <Sidebar /> {/* Add Sidebar here */}
            <div className="main-content-container">
                <div className="main-content">
                    <div>
                        <ResourceFilter filterType={filterType} setFilterType={setFilterType} />
                        <h2>Resource List</h2>
                        <ResourceList resources={resources} />
                    </div>
                    <div className="map-container">
                        {latitude !== null && longitude !== null && (
                            <ResourceMap latitude={latitude} longitude={longitude} resources={resources} />
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ResourceLocatorPage;
