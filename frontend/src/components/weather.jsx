import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get user's location
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // Fetch weather data
          const apiKey = '13eb720f4567eac5bc01a62d0a871acb';
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={API key}`;


          const response = await axios.get(url);
          setWeatherData(response.data);
          setLoading(false);
        } catch (err) {
          setError('Failed to fetch weather data.');
          setLoading(false);
        }
      },
      (error) => {
        setError('Failed to get location.');
        setLoading(false);
      }
    );
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Weather Forecast</h1>
      {weatherData && (
        <div>
          <p>Location: {weatherData.timezone}</p>
          <p>Current Temperature: {weatherData.current.temp}°C</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Weather: {weatherData.current.weather[0].description}</p>
          <h2>Daily Forecast</h2>
          <ul>
            {weatherData.daily.map((day, index) => (
              <li key={index}>
                <p>Day {index + 1}:</p>
                <p>Temperature: {day.temp.day}°C</p>
                <p>Humidity: {day.humidity}%</p>
                <p>Rain: {day.rain ? `${day.rain} mm` : 'No rain'}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
