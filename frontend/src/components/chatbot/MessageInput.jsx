import React, { useState } from 'react';
import './Chatbot.css'; // Ensure to include your styles

const CustomMessageInput = ({ onSend }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSend = () => {
        if (inputValue.trim()) {
            onSend(inputValue);
            setInputValue('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="custom-message-input">
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="Type message here..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default CustomMessageInput;
