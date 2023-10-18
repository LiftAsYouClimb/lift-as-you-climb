const sqlite3 = require("sqlite3").verbose();
const dbFilePath = process.env.DB_FILE_PATH || "database.sqlite";

const db = new sqlite3.Database(dbFilePath, (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to the database");
  }
});

export default db; // Export the database connection
