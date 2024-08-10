import React, { useState, useEffect } from 'react';
import './info.css';

const DisasterInfo = () => {
  const [selectedDisaster, setSelectedDisaster] = useState('cyclone');
  const [disasterData, setDisasterData] = useState({});

  useEffect(() => {
    fetch('/disasterData.json')
      .then((response) => response.json())
      .then((data) => setDisasterData(data));
  }, []);

  const handleDisasterChange = (disaster) => {
    setSelectedDisaster(disaster);
  };

  const selectedData = disasterData[selectedDisaster];

  return (
    <div className="disaster-container">
      <nav className="disaster-menu">
        <ul>
          {Object.keys(disasterData).map((disaster) => (
            <li key={disaster} onClick={() => handleDisasterChange(disaster)}>
              {disaster.charAt(0).toUpperCase() + disaster.slice(1).replace(/-/g, ' ')}
            </li>
          ))}
        </ul>
      </nav>
      {selectedData && (
        <>
          <div className="disaster-info">
            <h2>{selectedData.title}</h2>
            <p><strong>What is this?</strong> {selectedData.description}</p>
            <p><strong>How is it caused?</strong> {selectedData.cause}</p>
            <h3>Before:</h3>
            <p>{selectedData.before}</p>
            <h3>During:</h3>
            <p>{selectedData.during}</p>
            <h3>After:</h3>
            <p>{selectedData.after}</p>
          </div>
          <div className="disaster-images">
            {selectedData.images.map((image, index) => (
              <img key={index} src={`/${image}`} alt={`Disaster ${index + 1}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default DisasterInfo;
