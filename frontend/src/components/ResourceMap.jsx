import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define a mapping of resource types to icons
const iconUrls = {
    hospital: '/icons/Anagha/hospital.png',
    grocery: '/icons/Anagha/grocery.png',
    shelter: '/icons/Anagha/shelter.png',
    pharmacy: '/icons/Anagha/pharmacy.png'
};

const ResourceMap = ({ latitude, longitude, resources }) => {
    const [location, setLocation] = useState([latitude, longitude]);

    useEffect(() => {
        setLocation([latitude, longitude]);
    }, [latitude, longitude]);

    return (
        <MapContainer center={location} zoom={5} style={{ height: '80vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {resources.map(resource => (
                <Marker
                    key={resource._id}
                    position={[resource.location.coordinates[1], resource.location.coordinates[0]]}
                    icon={L.icon({
                        iconUrl: iconUrls[resource.type] || iconUrls.default,
                        iconSize: [20, 20], // Adjust size as needed
                        iconAnchor: [16, 32], // Anchor the icon properly
                        popupAnchor: [0, -32] // Popup position
                    })}
                >
                    <Popup>
                        <strong>{resource.name}</strong><br />
                        Type: {resource.type}<br />
                        Availability: {resource.availability}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default ResourceMap;
