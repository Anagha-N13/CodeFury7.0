import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const ResourceMap = ({ latitude, longitude, resources }) => {
    const [userPosition, setUserPosition] = useState(null);

    useEffect(() => {
        if (latitude && longitude) {
            setUserPosition([latitude, longitude]);
        }
    }, [latitude, longitude]);

    return (
        <MapContainer center={userPosition || [51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {userPosition && (
                <Marker position={userPosition} icon={L.icon({
                    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                })}>
                    <Popup>You are here</Popup>
                </Marker>
            )}
            {resources.map((resource, index) => (
                <Marker
                    key={index}
                    position={[resource.location.coordinates[1], resource.location.coordinates[0]]}
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
