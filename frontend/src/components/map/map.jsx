import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';

// Custom icons for different disasters
const earthquakeIcon = new L.Icon({
  iconUrl: require('../../Assets/Ananya/earthquake.png'),
  iconSize: [25, 25],
  iconAnchor: [12, 25],
  popupAnchor: [0, -25],
});

const cycloneIcon = new L.Icon({
  iconUrl: require('../../Assets/Ananya/twister.png'),
  iconSize: [25, 25],
  iconAnchor: [12, 25],
  popupAnchor: [0, -25],
});

const rainIcon = new L.Icon({
  iconUrl: require('../../Assets/Ananya/rainy.png'),
  iconSize: [25, 25],
  iconAnchor: [12, 25],
  popupAnchor: [0, -25],
});

const floodIcon = new L.Icon({
  iconUrl: require('../../Assets/Ananya/tsunami.png'), // Add a flood icon in your Assets
  iconSize: [25, 25],
  iconAnchor: [12, 25],
  popupAnchor: [0, -25],
});

const tsunamiIcon = new L.Icon({
  iconUrl: require('../../Assets/Ananya/tsunami.png'),
  iconSize: [25, 25],
  iconAnchor: [12, 25],
  popupAnchor: [0, -25],
});

const MapComponent = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [earthquakeData, setEarthquakeData] = useState([]);
  const [cycloneData, setCycloneData] = useState([]);
  const [floodData, setFloodData] = useState([]); // Added flood data state
  const [tsunamiData, setTsunamiData] = useState([]);
  const [mapCenter, setMapCenter] = useState([20.5937, 78.9629]); // Default to India

  useEffect(() => {
    const weatherApiKey = '13eb720f4567eac5bc01a62d0a871acb'; // Replace with your OpenWeatherMap API key
    const fetchWeatherAndDisasters = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            console.log('Location:', latitude, longitude);
  
            const bbox = [
                Math.max(longitude - 10, -180),
                Math.max(latitude - 10, -90),
                Math.min(longitude + 10, 180),
                Math.min(latitude + 10, 90),
                10 // zoom level
              ].join(',');
              
              axios.get(`https://api.openweathermap.org/data/2.5/box/city?bbox=${bbox}&appid=${weatherApiKey}`)
                .then(response => {
                  console.log('Weather Data:', response.data.list);
                  setWeatherData(response.data.list);
                })
                .catch(error => console.error('Error fetching weather data:', error));
              
  
            // Fetch earthquake data
            axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
              .then(response => {
                console.log('Earthquake Data:', response.data.features);
                setEarthquakeData(response.data.features);
              })
              .catch(error => console.error('Error fetching earthquake data:', error));
  
            // Fetch cyclone data
            // axios.get('https://www.some-cyclone-api.com/data') // Replace with an actual cyclone data API
            //   .then(response => {
            //     console.log('Cyclone Data:', response.data.features);
            //     setCycloneData(response.data.features);
            //   })
            //   .catch(error => console.error('Error fetching cyclone data:', error));
  
            // Fetch flood data
            // axios.get('https://www.some-flood-api.com/data') // Replace with an actual flood data API
            //   .then(response => {
            //     console.log('Flood Data:', response.data.features);
            //     setFloodData(response.data.features);
            //   })
            //   .catch(error => console.error('Error fetching flood data:', error));
  
            // Fetch tsunami data
            // axios.get('https://www.some-tsunami-api.com/data') // Replace with an actual tsunami data API
            //   .then(response => {
            //     console.log('Tsunami Data:', response.data.features);
            //     setTsunamiData(response.data.features);
            //   })
            //   .catch(error => console.error('Error fetching tsunami data:', error));
  
          },
          (error) => console.error('Error fetching location:', error)
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchWeatherAndDisasters();
  }, []);
  

  return (
    <div className="map-disaster-container">
      <div className="map-half">
        <MapContainer center={mapCenter} zoom={5} scrollWheelZoom={true} className="map-container">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {weatherData.map((weather, index) => {
            if (weather.weather[0].main.toLowerCase() === 'rain') { // Only show markers for rain
              return (
                <Marker key={index} position={[weather.coord.Lat, weather.coord.Lon]} icon={rainIcon}>
                  <Popup>
                    <strong>{weather.name}</strong><br />
                    Temperature: {Math.round(weather.main.temp - 273.15)}°C<br />
                    Weather: {weather.weather[0].description}
                  </Popup>
                </Marker>
              );
            }
            return null;
          })}
          {earthquakeData.map((earthquake, index) => (
            <Marker
              key={index}
              position={[earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0]]}
              icon={earthquakeIcon}
            >
              <Popup>
                <strong>Magnitude: {earthquake.properties.mag}</strong><br />
                Location: {earthquake.properties.place}
              </Popup>
            </Marker>
          ))}
          {cycloneData.map((cyclone, index) => (
            <Marker
              key={index}
              position={[cyclone.geometry.coordinates[1], cyclone.geometry.coordinates[0]]}
              icon={cycloneIcon}
            >
              <Popup>
                <strong>Cyclone: {cyclone.properties.name}</strong><br />
                Location: {cyclone.properties.place}
              </Popup>
            </Marker>
          ))}
          {floodData.map((flood, index) => (
            <Marker
              key={index}
              position={[flood.geometry.coordinates[1], flood.geometry.coordinates[0]]}
              icon={floodIcon}
            >
              <Popup>
                <strong>Flood Warning</strong><br />
                Location: {flood.properties.place}
              </Popup>
            </Marker>
          ))}
          {tsunamiData.map((tsunami, index) => (
            <Marker
              key={index}
              position={[tsunami.geometry.coordinates[1], tsunami.geometry.coordinates[0]]}
              icon={tsunamiIcon}
            >
              <Popup>
                <strong>Tsunami Warning</strong><br />
                Location: {tsunami.properties.place}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      {/* <div className="disaster-half">
        <h2>Expected Disasters</h2>
        <ul>
          {weatherData.filter(weather => weather.weather[0].main.toLowerCase() === 'rain').map((weather, index) => (
            <li key={index}>
              <strong>{weather.name}</strong> - Rain expected, Temperature: {Math.round(weather.main.temp - 273.15)}°C
            </li>
          ))}
          {earthquakeData.map((earthquake, index) => (
            <li key={index}>
              <strong>{earthquake.properties.place}</strong> - Earthquake, Magnitude: {earthquake.properties.mag}
            </li>
          ))}
          {cycloneData.map((cyclone, index) => (
            <li key={index}>
              <strong>{cyclone.properties.place}</strong> - Cyclone: {cyclone.properties.name}
            </li>
          ))}
          {floodData.map((flood, index) => (
            <li key={index}>
              <strong>{flood.properties.place}</strong> - Flood Warning
            </li>
          ))}
          {tsunamiData.map((tsunami, index) => (
            <li key={index}>
              <strong>{tsunami.properties.place}</strong> - Tsunami Warning
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
  
};

export default MapComponent;

// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';

// // Define your icon styles here
// import L from 'leaflet';

// const weatherIcon = L.icon({
//   iconUrl: require('../../Assets/Ananya/rainy.png'),
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });

// const earthquakeIcon = L.icon({
//   iconUrl: require('../../Assets/Ananya/earthquake.png'),
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });

// const MapComponent = () => {
//   const [markers, setMarkers] = useState([]);
//   const [currentCountry, setCurrentCountry] = useState(null);

//   const YOUR_API_KEY = '13eb720f4567eac5bc01a62d0a871acb';

//   useEffect(() => {
//     // Get user's country (you can use IP-based API or geolocation)
//     axios.get('https://ipapi.co/json/')
//       .then(response => {
//         const country = response.data.country_name;
//         setCurrentCountry(country);

//         // Fetch weather, earthquake, and flood data
//         fetchData(country);
//       });
//   }, []);

//   const fetchData = async (country) => {
//     const citiesInKarnataka = ['Bengaluru', 'Mysore', 'Mangalore', 'Hubli', 'Belgaum']; // Add more cities

//     const weatherMarkers = await fetchWeatherForCities(citiesInKarnataka);
//     setMarkers(prev => [...prev, ...weatherMarkers]);

//     // Fetch earthquake data
//     axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson')
//       .then(response => {
//         const earthquakeMarkers = processEarthquakeData(response.data);
//         setMarkers(prev => [...prev, ...earthquakeMarkers]);
//       });

//     // Fetch flood data if you have an API
//     // axios.get(`https://api.example.com/floods?country=${country}&apikey=${YOUR_API_KEY}`)
//     //   .then(response => {
//     //     const floodMarkers = processFloodData(response.data);
//     //     setMarkers(prev => [...prev, ...floodMarkers]);
//     //   });
//   };

//   const fetchWeatherForCities = async (cities) => {
//     const weatherMarkers = [];

//     for (const city of cities) {
//       try {
//         const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${YOUR_API_KEY}`);
//         const weather = response.data.weather[0].main;

//         if (weather.toLowerCase().includes('rain')) {
//           const lat = response.data.coord.lat;
//           const lon = response.data.coord.lon;
//           const info = `Weather: ${response.data.weather[0].description}, Temp: ${response.data.main.temp}K`;

//           weatherMarkers.push({
//             lat,
//             lon,
//             info,
//             icon: weatherIcon
//           });
//         }
//       } catch (error) {
//         console.error(`Error fetching weather data for ${city}:`, error);
//       }
//     }

//     return weatherMarkers;
//   };

//   const processEarthquakeData = (data) => {
//     const markers = [];

//     data.features.forEach((earthquake) => {
//       const lat = earthquake.geometry.coordinates[1];
//       const lon = earthquake.geometry.coordinates[0];
//       const mag = earthquake.properties.mag;
//       const place = earthquake.properties.place;
//       const info = `Magnitude: ${mag}, Location: ${place}`;

//       markers.push({
//         lat,
//         lon,
//         info,
//         icon: earthquakeIcon
//       });
//     });

//     return markers;
//   };

// //   const processFloodData = (data) => {
// //     const markers = [];

// //     data.floods.forEach((flood) => {
// //       const lat = flood.location.lat;
// //       const lon = flood.location.lon;
// //       const severity = flood.severity;
// //       const description = flood.description;
// //       const info = `Flood Severity: ${severity}, Description: ${description}`;

// //       markers.push({
// //         lat,
// //         lon,
// //         info,
// //         icon: floodIcon
// //       });
// //     });

// //     return markers;
// //   };

//   return (
//     <div className="App">
//       <h1>Weather, Earthquake, and Flood Map for {currentCountry}</h1>
//       <MapContainer center={[20, 77]} zoom={5} style={{ height: '80vh', width: '100%' }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="&copy; OpenStreetMap contributors"
//         />
//         {markers.map((marker, idx) => (
//           <Marker key={idx} position={[marker.lat, marker.lon]} icon={marker.icon}>
//             <Popup>
//               {marker.info}
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapComponent;
