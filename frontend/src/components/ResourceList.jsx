import React from 'react';

const ResourceList = ({ resources }) => {
    return (
        <div style={{ maxHeight: '80vh', overflowY: 'scroll' }}>
            <ul>
                {resources.map(resource => (
                    <li key={resource._id}>
                        <strong>{resource.name}</strong> - {resource.type}<br />
                        Availability: {resource.availability}<br />
                        Location: [{resource.location.coordinates[1]}, {resource.location.coordinates[0]}]
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceList;
