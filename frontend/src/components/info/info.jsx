import React, { useState } from 'react';
import disastersData from './disData';
import './info.css';
import Sidebar from '../sidebar/Sidebar';

// Assuming images are in the public folder under /Assets/info/
const DisasterInfo = () => {
  const [selectedDisaster, setSelectedDisaster] = useState('cyclone');

  const handleDisasterChange = (disaster) => {
    setSelectedDisaster(disaster);
  };

  const selectedData = disastersData[selectedDisaster];

  return (
    <div className='info-main'>
      <Sidebar />
    <div className="disaster-container">
      <nav className="disaster-menu">
        <ul>
          {Object.keys(disastersData).map((disaster) => (
            <li 
              key={disaster} 
              onClick={() => handleDisasterChange(disaster)}
              className={selectedDisaster === disaster ? 'active' : ''}
            >
              {disaster.charAt(0).toUpperCase() + disaster.slice(1).replace(/-/g, ' ')}
            </li>
          ))}
        </ul>
      </nav>
      {selectedData && (
        <div className="disaster-content">
          <div className="disaster-info">
            <h2 className='titlee'>{selectedData.title}</h2>
            <p><strong>What is this?</strong></p>
            <ul>
              <li>{selectedData.description}</li>
            </ul>
            <p><strong>How is it caused?</strong></p>
            <ul>
              <li>{selectedData.cause}</li>
            </ul>
            <p><strong>Before</strong></p>
            <ul>
              {selectedData.before.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p><strong>During</strong></p>
            <ul>
              {selectedData.during.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p><strong>During</strong></p>
            <ul>
              {selectedData.after.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="disaster-images">
            {selectedData.images.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Disaster ${index + 1}`} 
              />
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default DisasterInfo;
