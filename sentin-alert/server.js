const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-Memory Storage temp place for storing a notifications
let alerts = [];

// 1. Health Check Route
app.get('/status', (req, res) => {
    res.json({
        service: "Sentin-Alert (Node.js)",
        status: "online",
        alerts_count: alerts.length,
        uptime: process.uptime()
    });
});

// 2. Trigger Alert (Endpoint that receives data from Python)
app.post('/trigger', (req, res) => {
    const { message, level, timestamp } = req.body;

    // Validation
    if (!message || !level) {
        return res.status(400).json({ error: "Missing 'message' or 'level'" });
    }

    // Create Alert Object
    const newAlert = {
        id: alerts.length + 1,
        message: message,
        level: level, // e.g., "critical", "warning"
        timestamp: timestamp || new Date().toISOString()
    };

    // Save to memory
    alerts.push(newAlert);

    // Log to console (Simulation of sending SMS/Email)
    console.log(`[ALERT RECEIVED] Level: ${level} | Msg: ${message}`);

    res.status(201).json({
        success: true,
        message: "Alert processed",
        alert_id: newAlert.id
    });
});

// 3. Get All Alerts (Endpoint for the Frontend Dashboard)
app.get('/alerts', (req, res) => {
    res.json(alerts);
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Sentin-Alert Service running on http://localhost:${PORT}`);
});