import express from 'express';

// Import controllers for client-related operations
import * as clientController from '../controllers/clientController.js';

const router = express.Router();

// Define routes and map them to controller functions
router.get('/clients', clientController.getClients);
router.post('/clients', clientController.createClient);
router.put('/clients/:id', clientController.updateClient);
router.delete('/clients/:id', clientController.deleteClient);
router.get('/clients/search', clientController.searchClients);

export default router;
