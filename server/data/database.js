const sqlite3 = require("sqlite3").verbose();
const dbFilePath = process.env.DB_FILE_PATH || "database.sqlite";

const db = new sqlite3.Database(dbFilePath, (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to the database");
  }
});

db.serialize(() => {
  // Create the Users table
  db.run(`
    CREATE TABLE IF NOT EXISTS Users (
      id INTEGER PRIMARY KEY,
      email TEXT NOT NULL,
      userName TEXT,
      bio TEXT,
      professionalBackground TEXT,
      location TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS SocialMediaLinks (
      id INTEGER PRIMARY KEY,
      user_id INTEGER,
      platform TEXT NOT NULL, -- e.g., "Twitter," "LinkedIn," "Instagram"
      link TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES Users (id)
    )
  `);

  // Create the Encouragement Requests table
  db.run(`
    CREATE TABLE IF NOT EXISTS Requests (
      id INTEGER PRIMARY KEY,
      user_id INTEGER,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      emojiResponses TEXT, -- You can store emoji responses as a string or in a separate table
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES Users (id)
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
      FOREIGN KEY (user_id) REFERENCES Users (id)
    )
  `);
});

export default db; // Export the database connection
