// Imports ---------------------------
import mysql from "mysql2/promise";
import "dotenv/config";

// Database Connection ---------------

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PSWD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT) || 3306,
  namedPlaceholders: true,
};

let database = null;

try {
  database = await mysql.createConnection(dbConfig);
} catch (error) {
  console.log("Error creating database connection: " + error.message);
  process.exit();
}

export default database;
