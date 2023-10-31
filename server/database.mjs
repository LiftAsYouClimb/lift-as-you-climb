import sqlite3 from "sqlite3";

// Determine the file path for the database, defaulting to 'database.sqlite' if not specified
const dbFilePath = process.env.DB_FILE_PATH || "database.sqlite";

// Initialize the SQLite database with the file path and open it for reading and writing
const db = new sqlite3.Database(dbFilePath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to the database");
  }
});

// Perform database setup operations in a serialized manner
db.serialize(() => {
  // Create the Encouragement Requests table (climbs)
  db.run(`
    CREATE TABLE IF NOT EXISTS Requests (
      id INTEGER PRIMARY KEY,
      user_id INTEGER,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES UserProfiles (id)
    )
  `);

  // Create the Encouragement Responses table (lifts)
  db.run(`
    CREATE TABLE IF NOT EXISTS Responses (
      id INTEGER PRIMARY KEY,
      request_id INTEGER,
      user_id INTEGER,
      lift_words TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (request_id) REFERENCES Requests (id),
      FOREIGN KEY (user_id) REFERENCES UserProfiles (id)
    )
  `);
});

// Function to execute a query on the database
export function run(query, params, callback) {
  return db.run(query, params, callback);
}

export function all(query, params, callback) {
  db.all(query, params, callback);
}

export { db };
