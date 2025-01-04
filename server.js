const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.post('/login', (req, res) => {
  const { username, password } = req.body; // Extract username and password from the request body
  console.log(`Received Username: ${username}, Password: ${password}`); // Log to the terminal
  res.send('Login successful'); // Send a response back to the client
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
