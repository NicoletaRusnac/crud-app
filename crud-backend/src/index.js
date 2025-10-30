/**
 * Main application entry point
 * Sets up Express server with middleware and routes
 */

import express from 'express';
import cors from 'cors';
import clientRoutes from './routes/clientRoutes.js';

// Initialize express application
const app = express();
const port = 3000;

// Middleware setup
app.use(cors());                // Enable Cross-Origin Resource Sharing
app.use(express.json());        // Parse JSON request bodies

// Mount routes
app.use('/api', clientRoutes);  // All client routes will be prefixed with /api

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

