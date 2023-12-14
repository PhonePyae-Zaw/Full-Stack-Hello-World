const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all routes

// API Routes
app.get('/api/hello', (req, res) => {
  res.send('Hello World from the backend!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is data from the API' });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
