// src/components/StateList.js

import React from 'react';

const StateList = ({ states, onStateClick }) => {
    return (
        <div className="state-list">
            <h3>States</h3>
            <ul>
                {states.map((state) => (
                    <li key={state} onClick={() => onStateClick(state)}>
                        {state}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StateList;
