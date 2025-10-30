/**
 * Client Controller Module
 * Handles HTTP requests for client operations
 * @module clientController
 */

import * as clientService from '../services/clientServices.js';

export const getClients = async (req, res) => {
  try {
    const clients = await clientService.getClients();
    res.status(200).json(clients);
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({ error: error.message });
    }
  }