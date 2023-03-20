import mysql from "mysql2";

// create the connection to database

const db = mysql.createConnection({
    host: process.env.DB_DOMAIN,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_DEFAULT_SCHEMA,
});


db.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default db;
