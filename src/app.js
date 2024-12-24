const express = require('express');
const cors = require('cors');
const penelitianRoutes = require('./routes/SipenaRoutes'); // Pastikan jalur relatifnya benar

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routing
app.use('/api', penelitianRoutes);

module.exports = app;
