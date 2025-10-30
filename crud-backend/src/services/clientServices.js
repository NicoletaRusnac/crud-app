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
// Function to get all clients
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

//  Function to create a new client
export const createClient = async (clientData) => {
    const { name, email, job, rate, isactive } = clientData;
    const {rows} = await query (
        `INSERT INTO clients_tb (name, email, job, rate, isactive) 
         VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [name, email, job, rate, isactive]
     );
    return rows[0]
    }

//Function to update a client
export const updateClient = async (clientData, clientId) => {
    const { name, email, job, rate, isactive } = clientData;
    const {rows} = await query (
        `UPDATE clients_tb 
         SET name = $1, email = $2, job = $3, rate = $4, isactive = $5
         WHERE id = $6 RETURNING *`,
        [name, email, job, rate, isactive, clientId]
     );
    return rows[0]
    }
//Function to delete a client
export const deleteClient = async (clientId) => {
    const {rowCount} = await query (
        `DELETE FROM clients_tb 
         WHERE id = $1 `,
        [clientId]
     ); 
     return rowCount > 0; // Returns true if a row was deleted, false otherwise
    }

// Function to search clients by name or email
export const searchClients = async (searchTerm) => {
    const { rows } = await query(
        `SELECT * FROM clients_tb
         WHERE name ILIKE $1 OR email ILIKE $1 OR job ILIKE $1 `,
        [`%${searchTerm}%`]
    );
    return rows;
}



