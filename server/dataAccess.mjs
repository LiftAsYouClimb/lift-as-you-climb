import { run, all } from "./database.mjs";
import fetch from "node-fetch"; // Assuming a suitable package for making HTTP requests

const getUserDetailsFromPassage = async (token) => {
  const passageUserDetailsEndpoint = "PassageUserDetailsEndpoint"; // TODO: Replace with the actual endpoint from Passage

  const response = await fetch(passageUserDetailsEndpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const userData = await response.json();
    return userData;
  } else {
    throw new Error("Failed to fetch user details");
  }
};

async function createRequest(userId, title, description) {
  return new Promise((resolve, reject) => {
    run(
      "INSERT INTO Requests (user_id, title, description) VALUES (?, ?, ?)",
      [userId, title, description],
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

async function createResponse(requestId, userId, lift_words) {
  return new Promise((resolve, reject) => {
    run(
      "INSERT INTO Responses (request_id, user_id, lift_words) VALUES (?, ?, ?)",
      [requestId, userId, lift_words],
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

async function getRequest(requestId) {
  return new Promise((resolve, reject) => {
    all(
      "SELECT * FROM Requests WHERE id = ?",
      [requestId],
      function (err, rows) {
        if (err) {
          console.error("Error retrieving request:", err.message);
          reject(err);
        } else {
          resolve(rows);
        }
      }
    );
  });
}

async function getResponse(responseId) {
  return new Promise((resolve, reject) => {
    all(
      "SELECT * FROM Responses WHERE id = ?",
      [responseId],
      function (err, rows) {
        if (err) {
          console.error("Error retrieving response:", err.message);
          reject(err);
        } else {
          resolve(rows);
        }
      }
    );
  });
}

async function getResponsesByRequest(requestId) {
  return new Promise((resolve, reject) => {
    all(
      "SELECT * FROM Responses WHERE request_id = ?",
      [requestId],
      function (err, rows) {
        if (err) {
          console.error(
            "Error retrieving responses for the request:",
            err.message
          );
          reject(err);
        } else {
          resolve(rows);
        }
      }
    );
  });
}

const dataAccessLayer = {
  getUserDetailsFromPassage,
  createRequest,
  createResponse,
  getRequest,
  getResponse,
  getResponsesByRequest,
};

export default dataAccessLayer;
