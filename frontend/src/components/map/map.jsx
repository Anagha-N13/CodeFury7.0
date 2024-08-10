// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import axios from 'axios';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import './map.css';

// // Custom icons for different disasters
// const earthquakeIcon = new L.Icon({
//   iconUrl: require('../../Assets/Ananya/earthquake.png'),
//   iconSize: [25, 25],
//   iconAnchor: [12, 25],
//   popupAnchor: [0, -25],
// });

// const cycloneIcon = new L.Icon({
//   iconUrl: require('../../Assets/Ananya/twister.png'),
//   iconSize: [25, 25],
//   iconAnchor: [12, 25],
//   popupAnchor: [0, -25],
// });

// const rainIcon = new L.Icon({
//   iconUrl: require('../../Assets/Ananya/rainy.png'),
//   iconSize: [25, 25],
//   iconAnchor: [12, 25],
//   popupAnchor: [0, -25],
// });

// const floodIcon = new L.Icon({
//   iconUrl: require('../../Assets/Ananya/tsunami.png'), // Add a flood icon in your Assets
//   iconSize: [25, 25],
//   iconAnchor: [12, 25],
//   popupAnchor: [0, -25],
// });

// const tsunamiIcon = new L.Icon({
//   iconUrl: require('../../Assets/Ananya/tsunami.png'),
//   iconSize: [25, 25],
//   iconAnchor: [12, 25],
//   popupAnchor: [0, -25],
// });

// const MapComponent = () => {
//   const [weatherData, setWeatherData] = useState([]);
//   const [earthquakeData, setEarthquakeData] = useState([]);
//   const [cycloneData, setCycloneData] = useState([]);
//   const [floodData, setFloodData] = useState([]); // Added flood data state
//   const [tsunamiData, setTsunamiData] = useState([]);
//   const [mapCenter, setMapCenter] = useState([20.5937, 78.9629]); // Default to India

//   useEffect(() => {
//     const weatherApiKey = '61905ccb33061a7b59e12744179a1581'; // Replace with your OpenWeatherMap API key
//     const fetchWeatherAndDisasters = async () => {
//       try {
//         navigator.geolocation.getCurrentPosition(
//           async (position) => {
//             const { latitude, longitude } = position.coords;
//             console.log('Location:', latitude, longitude);
  
//             const bbox = [
//                 Math.max(longitude - 10, -180),
//                 Math.max(latitude - 10, -90),
//                 Math.min(longitude + 10, 180),
//                 Math.min(latitude + 10, 90),
//                 10 // zoom level
//               ].join(',');
              
//              // axios.get(`https://api.openweathermap.org/data/2.5/box/city?bbox=${bbox}&appid=${weatherApiKey}`)
//               axios.get(`https://api.openweathermap.org/data/2.5/find?lat=20&lon=78&cnt=50&appid=${weatherApiKey}&units=metric&weather=rain
// `)
//                 .then(response => {
//                   console.log('Weather Data:', response.data.list);
//                   setWeatherData(response.data.list);
//                 })
//                 .catch(error => console.error('Error fetching weather data:', error));
              
  
//             // Fetch earthquake data
//             axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
//               .then(response => {
//                 console.log('Earthquake Data:', response.data.features);
//                 setEarthquakeData(response.data.features);
//               })
//               .catch(error => console.error('Error fetching earthquake data:', error));
  
            
  
//           },
//           (error) => console.error('Error fetching location:', error)
//         );
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
  
//     fetchWeatherAndDisasters();
//   }, []);
  

//   return (
//     <div className="map-disaster-container">
//       <div className="map-half">
//         <MapContainer center={mapCenter} zoom={5} scrollWheelZoom={true} className="map-container">
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
//           />
//           {weatherData.map((weather, index) => {
//             if (weather.weather[0].main.toLowerCase() === 'rain') { // Only show markers for rain
//               return (
//                 <Marker key={index} position={[weather.coord.Lat, weather.coord.Lon]} icon={rainIcon}>
//                   <Popup>
//                     <strong>{weather.name}</strong><br />
//                     Temperature: {Math.round(weather.main.temp - 273.15)}°C<br />
//                     Weather: {weather.weather[0].description}
//                   </Popup>
//                 </Marker>
//               );
//             }
//             return null;
//           })}
//           {earthquakeData.map((earthquake, index) => (
//             <Marker
//               key={index}
//               position={[earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0]]}
//               icon={earthquakeIcon}
//             >
//               <Popup>
//                 <strong>Magnitude: {earthquake.properties.mag}</strong><br />
//                 Location: {earthquake.properties.place}
//               </Popup>
//             </Marker>
//           ))}
//           {cycloneData.map((cyclone, index) => (
//             <Marker
//               key={index}
//               position={[cyclone.geometry.coordinates[1], cyclone.geometry.coordinates[0]]}
//               icon={cycloneIcon}
//             >
//               <Popup>
//                 <strong>Cyclone: {cyclone.properties.name}</strong><br />
//                 Location: {cyclone.properties.place}
//               </Popup>
//             </Marker>
//           ))}
//           {floodData.map((flood, index) => (
//             <Marker
//               key={index}
//               position={[flood.geometry.coordinates[1], flood.geometry.coordinates[0]]}
//               icon={floodIcon}
//             >
//               <Popup>
//                 <strong>Flood Warning</strong><br />
//                 Location: {flood.properties.place}
//               </Popup>
//             </Marker>
//           ))}
//           {tsunamiData.map((tsunami, index) => (
//             <Marker
//               key={index}
//               position={[tsunami.geometry.coordinates[1], tsunami.geometry.coordinates[0]]}
//               icon={tsunamiIcon}
//             >
//               <Popup>
//                 <strong>Tsunami Warning</strong><br />
//                 Location: {tsunami.properties.place}
//               </Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//       </div>
//       {/* <div className="disaster-half">
//         <h2>Expected Disasters</h2>
//         <ul>
//           {weatherData.filter(weather => weather.weather[0].main.toLowerCase() === 'rain').map((weather, index) => (
//             <li key={index}>
//               <strong>{weather.name}</strong> - Rain expected, Temperature: {Math.round(weather.main.temp - 273.15)}°C
//             </li>
//           ))}
//           {earthquakeData.map((earthquake, index) => (
//             <li key={index}>
//               <strong>{earthquake.properties.place}</strong> - Earthquake, Magnitude: {earthquake.properties.mag}
//             </li>
//           ))}
//           {cycloneData.map((cyclone, index) => (
//             <li key={index}>
//               <strong>{cyclone.properties.place}</strong> - Cyclone: {cyclone.properties.name}
//             </li>
//           ))}
//           {floodData.map((flood, index) => (
//             <li key={index}>
//               <strong>{flood.properties.place}</strong> - Flood Warning
//             </li>
//           ))}
//           {tsunamiData.map((tsunami, index) => (
//             <li key={index}>
//               <strong>{tsunami.properties.place}</strong> - Tsunami Warning
//             </li>
//           ))}
//         </ul>
//       </div> */}
//     </div>
//   );
  
// };

// export default MapComponent;


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
  iconUrl: require('../../Assets/Ananya/tsunami.png'),
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
  const [floodData, setFloodData] = useState([]);
  const [tsunamiData, setTsunamiData] = useState([]);
  const [mapCenter, setMapCenter] = useState([20.5937, 78.9629]); // Default to India

  useEffect(() => {
    const weatherApiKey = '61905ccb33061a7b59e12744179a1581'; // Replace with your OpenWeatherMap API key

    const fetchWeatherAndDisasters = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            console.log('Location:', latitude, longitude);

            // Fetch weather data
            axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&cnt=50&appid=${weatherApiKey}&units=metric`)
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

            // Fetch cyclone, flood, and tsunami data (assuming APIs are available)
            // Replace the URLs with the actual endpoints for cyclone, flood, and tsunami data
            // Example:
            // axios.get('https://api.example.com/cyclones').then(response => { setCycloneData(response.data); }).catch(error => console.error('Error fetching cyclone data:', error));
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
            const lat = weather.coord.lat; // Corrected key
            const lon = weather.coord.lon; // Corrected key
            if (weather.weather[0].main.toLowerCase() === 'rain') { // Only show markers for rain
              return (
                <Marker key={index} position={[lat, lon]} icon={rainIcon}>
                  <Popup>
                    <strong>{weather.name}</strong><br />
                    Temperature: {Math.round(weather.main.temp)}°C<br />
                    Weather: {weather.weather[0].description}
                  </Popup>
                </Marker>
              );
            }
            return null;
          })}
          {earthquakeData.map((earthquake, index) => {
            const lat = earthquake.geometry.coordinates[1];
            const lon = earthquake.geometry.coordinates[0];
            return (
              <Marker
                key={index}
                position={[lat, lon]}
                icon={earthquakeIcon}
              >
                <Popup>
                  <strong>Magnitude: {earthquake.properties.mag}</strong><br />
                  Location: {earthquake.properties.place}
                </Popup>
              </Marker>
            );
          })}
          {cycloneData.map((cyclone, index) => {
            const lat = cyclone.geometry.coordinates[1];
            const lon = cyclone.geometry.coordinates[0];
            return (
              <Marker
                key={index}
                position={[lat, lon]}
                icon={cycloneIcon}
              >
                <Popup>
                  <strong>Cyclone: {cyclone.properties.name}</strong><br />
                  Location: {cyclone.properties.place}
                </Popup>
              </Marker>
            );
          })}
          {floodData.map((flood, index) => {
            const lat = flood.geometry.coordinates[1];
            const lon = flood.geometry.coordinates[0];
            return (
              <Marker
                key={index}
                position={[lat, lon]}
                icon={floodIcon}
              >
                <Popup>
                  <strong>Flood Warning</strong><br />
                  Location: {flood.properties.place}
                </Popup>
              </Marker>
            );
          })}
          {tsunamiData.map((tsunami, index) => {
            const lat = tsunami.geometry.coordinates[1];
            const lon = tsunami.geometry.coordinates[0];
            return (
              <Marker
                key={index}
                position={[lat, lon]}
                icon={tsunamiIcon}
              >
                <Popup>
                  <strong>Tsunami Warning</strong><br />
                  Location: {tsunami.properties.place}
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
      {/* <div className="disaster-half">
        <h2>Expected Disasters</h2>
        <ul>
          {weatherData.filter(weather => weather.weather[0].main.toLowerCase() === 'rain').map((weather, index) => (
            <li key={index}>
              <strong>{weather.name}</strong> - Rain expected, Temperature: {Math.round(weather.main.temp)}°C
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
