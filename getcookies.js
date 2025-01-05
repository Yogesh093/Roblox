const axios = require('axios');

async function getAuthToken() {
    try {
        const response = await axios.post('https://example.com/api/auth', {
            username: 'yourUsername',
            password: 'yourPassword'
        });
        console.log('Auth Token:', response.data.token);
        return response.data.token;
    } catch (error) {
        console.error('Error fetching auth token:', error);
    }
}

getAuthToken();
