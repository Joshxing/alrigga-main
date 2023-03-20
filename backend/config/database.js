import mysql from "mysql2";

// create the connection to database

const db = mysql.createConnection({
    host: "http://localhost:8080/",
    user: "root",
    password: "",
    database: "db_restaurant"
});


db.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default db;
