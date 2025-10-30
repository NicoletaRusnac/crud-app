/**
 * Client Controller Module
 * Handles HTTP requests for client operations
 * @module clientController
 */

import * as clientService from '../services/clientServices.js';

// Controller to get all clients
export const getClients = async (req, res) => {
  try {
    const clients = await clientService.getClients();
    res.status(200).json(clients);
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({ error: error.message });
    }
  }

  // Controller to create a new client
export const createClient = async (req, res) => {
    try {
      const clientData = req.body;
      const newClient = await clientService.createClient(clientData);
      res.status(200).json(newClient);
    } catch (error) {
      console.error('Error creating client:', error);
      res.status(500).json({ error: error.message });
    }
  }
  // Controller to update a client
export const updateClient = async (req, res) => {
    try {
      const clientId = req.params.id;
      const clientData = req.body;
      const updatedClient = await clientService.updateClient(clientData, clientId);
      if (!updatedClient) {
        return res.status(404).json({ error: 'Client not found' });
      }
      res.status(200).json(updatedClient);
    } catch (error) {
      console.error('Error updating client:', error);
      res.status(500).json({ error: error.message });
    }
  } 

  //Controller to delete a client
  export const deleteClient = async (req, res) => {
    try {
      const clientId = req.params.id;
      const deletedClient = await clientService.deleteClient(clientId);
      if (!deletedClient) {
        return res.status(404).json({ error: 'Client not found' });
      }
      res.status(200).json({ message: 'Client deleted successfully' });
    } catch (error) {
      console.error('Error deleting client:', error);
      res.status(500).json({ error: error.message });
    }
  }

  // Controller to search clients
  export const searchClients = async (req, res) => {
    try {
      const searchTerm = req.query.q;
      const clients = await clientService.searchClients(searchTerm);
      res.status(200).json(clients);
    } catch (error) {
      console.error('Error searching clients:', error);
      res.status(500).json({ error: error.message });
    }
  }

