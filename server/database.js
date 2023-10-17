const sqlite3 = require("sqlite3").verbose();

// Provide the path to SQLite database file
const db = new sqlite3.Database("database.sqlite", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to the database");
  }
});

export default db; // Export the database connection
