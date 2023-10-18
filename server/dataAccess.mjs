import { run, db } from "./data/database.mjs";

// Function to get user profiles
async function getUserProfiles() {
  try {
    const userProfiles = db.all("SELECT * FROM UserProfiles");
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
  try {
    const result = db.run(
      "INSERT INTO Users (userName, bio, professionalBackground, location) VALUES (?, ?, ?, ?)",
      [userName, bio, professionalBackground, location]
    );

    return result.lastID;
  } catch (error) {
    throw error;
  }
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
