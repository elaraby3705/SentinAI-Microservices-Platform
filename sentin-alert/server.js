const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// 1. Health Check Route
app.get('/status', (req, res) => {
    res.json({
        service: "Sentin-Alert (Node.js)",
        status: "online",
        uptime: process.uptime()
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Sentin-Alert Service running on http://localhost:${PORT}`);
});