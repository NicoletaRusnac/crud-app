/**
 * Database configuration and connection module
 * @module db
 */

import pg from 'pg';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Initialize PostgreSQL client with connection details
const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

db.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Database connection error:', err));

/**
 * Execute a database query
 * @param {string} text - The SQL query text
 * @param {Array} params - Array of parameters to pass to the query
 * @returns {Promise<QueryResult>} - PostgreSQL query result
 */
export const query = (text, params) => db.query(text, params);

