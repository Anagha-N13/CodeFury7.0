// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import axios from 'axios';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import './map.css';

// // Custom icons for different disasters
// const earthquakeIcon = new L.Icon({
//     iconUrl: require('../../Assets/Ananya/earthquake.png'),
//     iconSize: [25, 25],
//     iconAnchor: [12, 25],
//     popupAnchor: [0, -25],
// });

// const cycloneIcon = new L.Icon({
//     iconUrl: require('../../Assets/Ananya/twister.png'),
//     iconSize: [25, 25],
//     iconAnchor: [12, 25],
//     popupAnchor: [0, -25],
// });

// const rainIcon = new L.Icon({
//     iconUrl: require('../../Assets/Ananya/rainy.png'),
//     iconSize: [25, 25],
//     iconAnchor: [12, 25],
//     popupAnchor: [0, -25],
// });

// const floodIcon = new L.Icon({
//     iconUrl: require('../../Assets/Ananya/tsunami.png'),
//     iconSize: [25, 25],
//     iconAnchor: [12, 25],
//     popupAnchor: [0, -25],
// });

// const tsunamiIcon = new L.Icon({
//     iconUrl: require('../../Assets/Ananya/tsunami.png'),
//     iconSize: [25, 25],
//     iconAnchor: [12, 25],
//     popupAnchor: [0, -25],
// });

// const MapComponent = () => {
//     const [weatherData, setWeatherData] = useState([]);
//     const [earthquakeData, setEarthquakeData] = useState([]);
//     const [cycloneData, setCycloneData] = useState([]);
//     const [floodData, setFloodData] = useState([]);
//     const [tsunamiData, setTsunamiData] = useState([]);
//     const [mapCenter, setMapCenter] = useState([20.5937, 78.9629]); // Default to India

//     useEffect(() => {
//         const weatherApiKey = '61905ccb33061a7b59e12744179a1581'; // Replace with your OpenWeatherMap API key

//         const fetchWeatherAndDisasters = async () => {
//             try {
//                 navigator.geolocation.getCurrentPosition(
//                     async (position) => {
//                         const { latitude, longitude } = position.coords;
//                         console.log('Location:', latitude, longitude);

//                         // Fetch weather data
//                         axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&cnt=50&appid=${weatherApiKey}&units=metric`)
//                             .then(response => {
//                                 console.log('Weather Data:', response.data.list);
//                                 setWeatherData(response.data.list);
//                                 // Check for severe weather and send notifications
//                                 response.data.list.forEach(weather => {
//                                     if (weather.weather[0].main.toLowerCase() === 'rain') {
//                                         sendNotification('Severe Weather Alert', `Heavy rain detected in ${weather.name}. Temperature: ${Math.round(weather.main.temp)}°C`);
//                                     }
//                                 });
//                             })
//                             .catch(error => console.error('Error fetching weather data:', error));

//                         // Fetch earthquake data
//                         axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
//                             .then(response => {
//                                 console.log('Earthquake Data:', response.data.features);
//                                 setEarthquakeData(response.data.features);
//                                 // Check for significant earthquakes and send notifications
//                                 response.data.features.forEach(earthquake => {
//                                     if (earthquake.properties.mag >= 5.0) { // Adjust the magnitude threshold as needed
//                                         sendNotification('Earthquake Alert', `Magnitude ${earthquake.properties.mag} earthquake detected at ${earthquake.properties.place}`);
//                                     }
//                                 });
//                             })
//                             .catch(error => console.error('Error fetching earthquake data:', error));

//                         // Fetch cyclone, flood, and tsunami data
//                         // Replace with actual API calls for cyclone, flood, and tsunami data
//                         // axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${weatherApiKey}`)

//                         //   .then(response => {
//                         //     console.log('Cyclone Data:', response.data);
//                         //     setCycloneData(response.data);
//                         //     // Check for cyclones and send notifications
//                         //     response.data.forEach(cyclone => {
//                         //       sendNotification('Cyclone Alert', `Cyclone ${cyclone.name} detected at ${cyclone.place}`);
//                         //     });
//                         //   })
//                         //   .catch(error => console.error('Error fetching cyclone data:', error));

//                         // axios.get('YOUR_FLOOD_API_URL')
//                         //   .then(response => {
//                         //     console.log('Flood Data:', response.data);
//                         //     setFloodData(response.data);
//                         //     // Check for floods and send notifications
//                         //     response.data.forEach(flood => {
//                         //       sendNotification('Flood Alert', `Flood warning at ${flood.place}`);
//                         //     });
//                         //   })
//                         //   .catch(error => console.error('Error fetching flood data:', error));

//                         // axios.get('YOUR_TSUNAMI_API_URL')
//                         //   .then(response => {
//                         //     console.log('Tsunami Data:', response.data);
//                         //     setTsunamiData(response.data);
//                         //     // Check for tsunamis and send notifications
//                         //     response.data.forEach(tsunami => {
//                         //       sendNotification('Tsunami Alert', `Tsunami warning at ${tsunami.place}`);
//                         //     });
//                         //   })
//                         //   .catch(error => console.error('Error fetching tsunami data:', error));

//                     },
//                     (error) => console.error('Error fetching location:', error)
//                 );
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         const sendNotification = (title, message) => {
//             if (Notification.permission === 'granted') {
//                 new Notification(title, { body: message });
//             } else if (Notification.permission !== 'denied') {
//                 Notification.requestPermission().then(permission => {
//                     if (permission === 'granted') {
//                         new Notification(title, { body: message });
//                     }
//                 });
//             }
//         };

//         fetchWeatherAndDisasters();
//     }, []);

//     return (
//         <div className="map-disaster-container">
//             <div className="map-half">
//                 <MapContainer center={mapCenter} zoom={5} scrollWheelZoom={true} className="map-container">
//                     <TileLayer
//                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                         attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
//                     />
//                     {weatherData.map((weather, index) => {
//                         const lat = weather.coord.lat;
//                         const lon = weather.coord.lon;
//                         if (weather.weather[0].main.toLowerCase() === 'rain') {
//                             return (
//                                 <Marker key={index} position={[lat, lon]} icon={rainIcon}>
//                                     <Popup>
//                                         <strong>{weather.name}</strong><br />
//                                         Temperature: {Math.round(weather.main.temp)}°C<br />
//                                         Weather: {weather.weather[0].description}
//                                     </Popup>
//                                 </Marker>
//                             );
//                         }
//                         return null;
//                     })}
//                     {earthquakeData.map((earthquake, index) => {
//                         const lat = earthquake.geometry.coordinates[1];
//                         const lon = earthquake.geometry.coordinates[0];
//                         return (
//                             <Marker
//                                 key={index}
//                                 position={[lat, lon]}
//                                 icon={earthquakeIcon}
//                             >
//                                 <Popup>
//                                     <strong>Magnitude: {earthquake.properties.mag}</strong><br />
//                                     Location: {earthquake.properties.place}
//                                 </Popup>
//                             </Marker>
//                         );
//                     })}
//                     {cycloneData.map((cyclone, index) => {
//                         const lat = cyclone.geometry.coordinates[1];
//                         const lon = cyclone.geometry.coordinates[0];
//                         return (
//                             <Marker
//                                 key={index}
//                                 position={[lat, lon]}
//                                 icon={cycloneIcon}
//                             >
//                                 <Popup>
//                                     <strong>Cyclone: {cyclone.properties.name}</strong><br />
//                                     Location: {cyclone.properties.place}
//                                 </Popup>
//                             </Marker>
//                         );
//                     })}
//                     {floodData.map((flood, index) => {
//                         const lat = flood.geometry.coordinates[1];
//                         const lon = flood.geometry.coordinates[0];
//                         return (
//                             <Marker
//                                 key={index}
//                                 position={[lat, lon]}
//                                 icon={floodIcon}
//                             >
//                                 <Popup>
//                                     <strong>Flood Warning</strong><br />
//                                     Location: {flood.properties.place}
//                                 </Popup>
//                             </Marker>
//                         );
//                     })}
//                     {tsunamiData.map((tsunami, index) => {
//                         const lat = tsunami.geometry.coordinates[1];
//                         const lon = tsunami.geometry.coordinates[0];
//                         return (
//                             <Marker
//                                 key={index}
//                                 position={[lat, lon]}
//                                 icon={tsunamiIcon}
//                             >
//                                 <Popup>
//                                     <strong>Tsunami Warning</strong><br />
//                                     Location: {tsunami.properties.place}
//                                 </Popup>
//                             </Marker>
//                         );
//                     })}
//                 </MapContainer>
//             </div>
//         </div>
//     );
// };

// export default MapComponent;

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';
import WeatherComponent from '../weather/weather';

// Custom icons for different disasters
const earthquakeIcon = new L.Icon({
    iconUrl: require('../../Assets/Ananya/icon/earthquake.png'),
    iconSize: [25, 25],
    iconAnchor: [12, 25],
    popupAnchor: [0, -25],
});

const rainIcon = new L.Icon({
    iconUrl: require('../../Assets/Ananya/icon/rainy.png'),
    iconSize: [25, 25],
    iconAnchor: [12, 25],
    popupAnchor: [0, -25],
});

// Mock data for earthquakes and rainfall
const earthquakeMockData = [
    { id: 1, location: 'Shillong', coordinates: [25.5788, 91.8933], magnitude: 5.3 },
    { id: 2, location: 'Guwahati', coordinates: [26.1445, 91.7362], magnitude: 4.9 },
    { id: 3, location: 'Kathmandu', coordinates: [27.7172, 85.3240], magnitude: 6.4 }, // Nearby to India
    { id: 4, location: 'Tirunelveli', coordinates: [8.7198, 77.7500], magnitude: 4.7 },
    { id: 5, location: 'Bhopal', coordinates: [23.2599, 77.4126], magnitude: 5.1 },
];

const rainfallMockData = [
    { id: 1, location: 'Kolkata', coordinates: [22.5726, 88.3639], description: 'Heavy Rainfall', temperature: 26 },
    { id: 2, location: 'Hyderabad', coordinates: [17.3850, 78.4867], description: 'Moderate Rainfall', temperature: 29 },
    { id: 3, location: 'Jaipur', coordinates: [26.9124, 75.7873], description: 'Light Rainfall', temperature: 32 },
    { id: 4, location: 'Pune', coordinates: [18.5204, 73.8567], description: 'Heavy Rainfall', temperature: 27 },
    { id: 5, location: 'Chandigarh', coordinates: [30.7333, 76.7794], description: 'Moderate Rainfall', temperature: 25 },
];

const MapComponent = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [earthquakeData, setEarthquakeData] = useState([]);
    const [mapCenter, setMapCenter] = useState([20.5937, 78.9629]); // Default to India

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                console.log('Location:', latitude, longitude);

                // Simulate fetching data
                setWeatherData(rainfallMockData);
                setEarthquakeData(earthquakeMockData);

                // Check for severe weather and send notifications
                rainfallMockData.forEach(weather => {
                    if (Math.abs(latitude - weather.coordinates[0]) < 1 && Math.abs(longitude - weather.coordinates[1]) < 1) {
                        sendNotification('Severe Weather Alert', `Heavy rain detected in ${weather.location}. Temperature: ${weather.temperature}°C`);
                    }
                });

                // Check for significant earthquakes and send notifications
                earthquakeMockData.forEach(earthquake => {
                    if (Math.abs(latitude - earthquake.coordinates[0]) < 1 && Math.abs(longitude - earthquake.coordinates[1]) < 1) {
                        sendNotification('Earthquake Alert', `Magnitude ${earthquake.magnitude} earthquake detected in ${earthquake.location}`);
                    }
                });
            },
            (error) => console.error('Error fetching location:', error)
        );

        const sendNotification = (title, message) => {
            if (Notification.permission === 'granted') {
                new Notification(title, { body: message });
            } else if (Notification.permission !== 'denied') {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        new Notification(title, { body: message });
                    }
                });
            }
        };
    }, []);

    return (
        <div className="map-disaster-container">
            <div className="map-half">
                <h2><a href='/home'>Home</a>Map the Madness: Live Weather & Quakes</h2>
                <MapContainer center={mapCenter} zoom={5} scrollWheelZoom={true} className="map-container">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    {weatherData.map((weather, index) => (
                        <Marker key={index} position={weather.coordinates} icon={rainIcon}>
                            <Popup>
                                <strong>{weather.location}</strong><br />
                                Temperature: {weather.temperature}°C<br />
                                Weather: {weather.description}
                            </Popup>
                        </Marker>
                    ))}
                    {earthquakeData.map((earthquake, index) => (
                        <Marker key={index} position={earthquake.coordinates} icon={earthquakeIcon}>
                            <Popup>
                                <strong>Magnitude: {earthquake.magnitude}</strong><br />
                                Location: {earthquake.location}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
            <WeatherComponent />
        </div>
    );
};

export default MapComponent;
