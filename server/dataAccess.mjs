import { run, db } from "./database.mjs";

// Function to get user profiles
async function getUserProfiles() {
  try {
    const userProfiles = await db.all("SELECT * FROM UserProfiles");
    return userProfiles;
  } catch (error) {
    throw error;
  }
}

async function updateUserProfile(
  userName,
  bio,
  professionalBackground,
  location
) {
  console.log("updateUserProfile function called");
  console.log(
    "Data to be inserted:",
    userName,
    bio,
    professionalBackground,
    location
  );
  const query = `
    INSERT INTO UserProfiles (userName, bio, professionalBackground, location)
    VALUES (?, ?, ?, ?)
  `;

  const params = [userName, bio, professionalBackground, location];

  return new Promise((resolve, reject) => {
    db.run(query, params, function (err) {
      if (err) {
        console.error("Error inserting user profile:", err.message);
        reject(err);
      } else {
        console.log("User profile inserted successfully");
        // Resolve with the last inserted ID
        resolve(this.lastID);
      }
    });
  });
}

// Function to create a new request
function createRequest(userId, title, description, emojiResponses) {
  return new Promise((resolve, reject) => {
    run(
      "INSERT INTO Requests (user_id, title, description, emojiResponses) VALUES (?, ?, ?, ?)",
      [userId, title, description, emojiResponses],
      function (err) {
        if (err) {
          console.error("Error creating request:", err.message);
          reject(err);
        } else {
          console.log("Request created with ID:", this.lastID);
          resolve(this.lastID);
        }
      }
    );
  });
}

// Function to create a new response
function createResponse(
  requestId,
  userId,
  type,
  words,
  resources,
  linkDescription
) {
  return new Promise((resolve, reject) => {
    run(
      "INSERT INTO Responses (request_id, user_id, type, words, resources, linkDescription) VALUES (?, ?, ?, ?, ?, ?)",
      [requestId, userId, type, words, resources, linkDescription],
      function (err) {
        if (err) {
          console.error("Error creating response:", err.message);
          reject(err);
        } else {
          console.log("Response created with ID:", this.lastID);
          resolve(this.lastID);
        }
      }
    );
  });
}

// Export the functions
const dataAccessLayer = {
  getUserProfiles,
  updateUserProfile,
  createRequest,
  createResponse,
};

export default dataAccessLayer;
