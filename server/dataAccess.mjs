import { run } from "./database.mjs";

async function createRequest(userId, title, description, emojiResponses) {
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

async function createResponse(
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
  createRequest,
  createResponse,
};

export default dataAccessLayer;
