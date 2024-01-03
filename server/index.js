const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Enable all CORS requests
app.use(cors());

// Define a function that modifies the proxy request by adding headers
const customProxy = createProxyMiddleware({
  target: 'https://enka.network/',
  changeOrigin: true,
 
});

app.use('/api/uid/', customProxy);
app.use(express.static('static'));

app.listen(3001, '0.0.0.0', () => {
  console.log(`API proxy started.`);
});
