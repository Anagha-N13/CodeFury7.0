import React from 'react';

const ResourceFilter = ({ filterType, setFilterType }) => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <label htmlFor="resourceType">Filter by Resource Type: </label>
            <select
                id="resourceType"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
            >
                <option value="">All</option>
                <option value="shelter">Shelter</option>
                <option value="hospital">Hospital</option>
                <option value="pharmacy">Pharmacy</option>
                <option value="grocery">Grocery</option>
            </select>
        </div>
    );
};

export default ResourceFilter;
