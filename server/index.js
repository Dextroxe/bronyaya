const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import cors middleware
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Enable all CORS requests
app.use(cors());
app.use(createProxyMiddleware('/api/uid/', {target: 'https://enka.network/', changeOrigin: true}))
app.use(express.static('static'))

app.listen(3001, '0.0.0.0',() => {
  console.log(`API proxy started.`)
})
