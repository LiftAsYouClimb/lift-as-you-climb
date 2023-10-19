import sqlite3 from "sqlite3";

const dbFilePath = process.env.DB_FILE_PATH || "database.sqlite";

const db = new sqlite3.Database(dbFilePath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to the database");
  }
});

db.serialize(() => {
  // Create the UserProfiles table
  db.run(`
    CREATE TABLE IF NOT EXISTS UserProfiles (
      id INTEGER PRIMARY KEY,
      userName TEXT,
      bio TEXT,
      professionalBackground TEXT,
      location TEXT,
      passageUserID TEXT
    )
  `);

  // Create the Encouragement Requests table
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

  // Create the Encouragement Responses table
  db.run(`
    CREATE TABLE IF NOT EXISTS Responses (
      id INTEGER PRIMARY KEY,
      request_id INTEGER,
      user_id INTEGER,
      type TEXT NOT NULL,
      words TEXT NOT NULL,
      resources TEXT,
      linkDescription TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (request_id) REFERENCES Requests (id),
      FOREIGN KEY (user_id) REFERENCES UserProfiles (id)
    )
  `);
});

export function run(query, params, callback) {
  return db.run(query, params, callback);
}

export { db };
