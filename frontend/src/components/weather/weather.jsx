import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './weather.css';
const location = require('../../Assets/Ananya/icon/location.png')


const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const fetchWeatherData = async (lat, lon) => {
      const weatherApiKey = 'da7978f7f0e69faff614d1ebcdf4aef2'; // OpenWeatherMap API key

      try {
        // Fetch city name from coordinates using Nominatim reverse geocoding
        const reverseGeocodingUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
        const reverseResponse = await axios.get(reverseGeocodingUrl);
        const city = reverseResponse.data.address.city || reverseResponse.data.address.town || reverseResponse.data.address.village || 'Unknown City';
        setCityName(city);

        // Fetch weather data for the city
        const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}&units=metric`;
        const weatherResponse = await axios.get(weatherUrl);
        setWeatherData(weatherResponse.data);

        // Set last updated time
        const currentDateTime = new Date().toLocaleString();
        setLastUpdated(currentDateTime);
      } catch (err) {
        setError('Failed to fetch weather data.');
      } finally {
        setLoading(false);
      }
    };

    // Get user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
      },
      (error) => {
        setError('Failed to get location.');
        setLoading(false);
      }
    );
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Helper function to get the day of the week
  const getDayOfWeek = (dateString, isToday = false) => {
    if (isToday) return 'Today';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  return (
    <div className="weather-container">
      <h1 className="weather-title">Weather Forecast</h1>
      {weatherData && (
        <div className="weather-info">
          <p className="weather-location"><img src={location}/>{cityName}</p>
          <p className="weather-temp">{Math.round(weatherData.list[0].main.temp)}°C</p>
          <p className="weather-description">{weatherData.list[0].weather[0].description}</p>
          <p className="weather-humidity">Humidity: {weatherData.list[0].main.humidity}%</p>
          {/* {weatherData.list[0].rain && (
            <p className="weather-rain">Rain (next 3 hours): {weatherData.list[0].rain['3h']} mm</p>
          )} */}
          <p className="weather-air-quality">Air Quality: Good</p>

          <div className="last-updated">Last Updated: {lastUpdated}</div>

          <div className="weather-forecast">
            {weatherData.list.slice(0, 8).map((forecast, index) => (
              <div key={index} className="forecast-item">
                <p>{new Date(forecast.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                <p>{Math.round(forecast.main.temp)}°C</p>
                <p>{forecast.weather[0].main}</p>
              </div>
            ))}
          </div>

          <div className="weather-weekly">
            {weatherData.list.filter((_, index) => index % 8 === 0).map((day, index) => (
              <div key={index} className="weekly-item">
                <p>{getDayOfWeek(day.dt_txt, index === 0)}</p>
                <p>{Math.round(day.main.temp)}°C</p>
                <p>{day.weather[0].main}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
