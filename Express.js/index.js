console.log("Hello World! From Express.js Directory");

const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to our home page');
});

app.get('/about', (req, res) => {
    res.send('Here is our short history');
});

app.listen(5000, () => console.log("Server running on port 5000"));