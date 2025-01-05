const axios = require('axios');

async function getCsrfToken() {
    try {
        const response = await axios.get('https://www.roblox.com/login');
        console.log('Response from GET request:', response.data); // Log the response data
        console.log('Response headers:', response.headers); // Log the response headers
        const csrfTokenMatch = response.data.match(/<meta name="csrf-token" data-token="(.*?)"/);
        const csrfToken = csrfTokenMatch ? csrfTokenMatch[1] : null; // Extract CSRF token from HTML
        return csrfToken;
    } catch (error) {
        console.error('Error fetching CSRF token:', error);
    }
}

async function getAuthToken() {
    const csrfToken = await getCsrfToken(); // Get CSRF token before logging in
    try {
        const response = await axios.post('https://www.roblox.com/login', {
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
