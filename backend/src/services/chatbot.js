const axios = require('axios');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Replace with your API key

async function getResponse(prompt) {
    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            model: 'text-davinci-003', // Use the appropriate model
            prompt: prompt,
            max_tokens: 150
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error("Error getting response from OpenAI:", error);
        return "Sorry, I couldn't process your request.";
    }
}

module.exports = { getResponse };
