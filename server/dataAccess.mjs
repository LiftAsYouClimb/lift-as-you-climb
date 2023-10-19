import { run, db } from "./database.mjs";

async function addUserProfileWithPassageUserID(
  passageUserID,
  userName,
  bio,
  professionalBackground,
  location
) {
  const query = `
    INSERT INTO UserProfiles (passageUserID, userName, bio, professionalBackground, location)
    VALUES (?, ?, ?, ?, ?)
  `;

  const params = [
    passageUserID,
    userName,
    bio,
    professionalBackground,
    location,
  ];

  return new Promise((resolve, reject) => {
    db.run(query, params, function (err) {
      if (err) {
        console.error(
          "Error inserting user profile with Passage UserID:",
          err.message
        );
        reject(err);
      } else {
        console.log("User profile with Passage UserID inserted successfully");
        // Resolve with the last inserted ID
        resolve(this.lastID);
      }
    });
  });
}

async function getUserProfilesByPassageUserID(passageUserID) {
  try {
    const userProfiles = db.all(
      "SELECT * FROM UserProfiles WHERE passageUserID = ?",
      [passageUserID]
    );
    return userProfiles;
  } catch (error) {
    throw error;
  }
}

async function updateUserProfile(
  userName,
  bio,
  professionalBackground,
  location,
  passageUserID
) {
  const query = `
  UPDATE UserProfiles 
  SET userName = ?, bio = ?, professionalBackground = ?, location = ?
  WHERE passageUserID = ?
`;

  const params = [
    userName,
    bio,
    professionalBackground,
    location,
    passageUserID,
  ];

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

const dataAccessLayer = {
  addUserProfileWithPassageUserID,
  getUserProfilesByPassageUserID,
  updateUserProfile,
  createRequest,
  createResponse,
};

export default dataAccessLayer;
