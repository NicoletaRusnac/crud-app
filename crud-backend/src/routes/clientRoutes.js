import express from 'express';

// Import controllers for client-related operations
import * as clientController from '../controllers/clientController.js';

const router = express.Router();

router.get('/clients', clientController.getClients);

export default router;
