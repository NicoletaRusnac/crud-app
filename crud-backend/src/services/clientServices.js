/**
 * Client Services Module
 * Handles all database operations related to clients
 * @module clientServices
 */

import { query } from '../db.js'

/**
 * Retrieve all clients from the database
 * @async
 * @function getClients
 * @returns {Promise<Array>} Array of client objects
 * @throws {Error} Database errors with specific messages for different scenarios
 */
export const getClients = async () => {
    try {   
        const { rows } = await query('SELECT * FROM clients_tb;');
        if (!rows || rows.length === 0) {
            throw new Error('No clients found in database');
        }
        return rows;
    } catch (error) {
        // Enhance the error message based on the type of error
        if (error.code === '42P01') {
            throw new Error('Table clients_tb does not exist in database');
        } else if (error.code === '28P01') {
            throw new Error('Database authentication failed');
        } else if (error.code === '3D000') {
            throw new Error('Database does not exist');
        } else if (error.message.includes('No clients found')) {
            throw error; // Pass through our custom error
        } else {
            throw new Error(`Database error: ${error.message}`);
        }
    }
}

