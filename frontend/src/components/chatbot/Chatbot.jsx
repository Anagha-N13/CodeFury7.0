import React, { useState } from 'react';
import axios from '../../axios/axios.js';
import './Chatbot.css'; // Import your CSS file

const Chatbot = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleSend = async () => {
        if (message.trim() === '') return;

        // Add user's message to chat history
        setChatHistory([...chatHistory, { text: message, sender: 'user' }]);
        
        try {
            // Make API call to backend chatbot endpoint
            const response = await axios.post('/chat', { prompt: message });
            setChatHistory([...chatHistory, { text: message, sender: 'user' }, { text: response.data.response, sender: 'bot' }]);
        } catch (error) {
            console.error('Error communicating with chatbot:', error);
            setChatHistory([...chatHistory, { text: message, sender: 'user' }, { text: 'Error: Unable to get a response', sender: 'bot' }]);
        }

        // Clear input field
        setMessage('');
    };

    return (
        <div className="chatbot-container">
            <div className="chat-history">
                {chatHistory.map((entry, index) => (
                    <div key={index} className={`chat-message ${entry.sender}`}>
                        <p>{entry.text}</p>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;
