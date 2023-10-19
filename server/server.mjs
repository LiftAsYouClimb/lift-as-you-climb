import express from "express";
import dataAccessLayer from "./dataAccess.mjs";
import passageAuthMiddleware from "./authMiddleware.mjs";
import dotenv from "dotenv";
import { db } from "./data/database.mjs";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// set up a route for HTTP GET requests to the root URL ("/")
app.get("/", (req, res) => {
  res.send("Hello from the Node.js server!");
});

app.get("/authenticatedRoute", passageAuthMiddleware, async (req, res) => {
  // Access the userID variable from the res object
  let userID = res.userID;

  // Now, we can use the userID in our route logic
  // For example, we might use it to fetch user-specific data or perform actions on behalf of the authenticated user
});

// Define a GET route to retrieve user profiles
app.get("/user-profiles", (req, res) => {
  dataAccessLayer
    .getUserProfiles()
    .then((userProfiles) => {
      // Send the user profiles as a JSON response
      res.json(userProfiles);
    })
    .catch((error) => {
      // Handle any errors (e.g., database errors)
      console.error("Error fetching user profiles:", error);
      res.status(500).json({ error: "Failed to fetch user profiles" });
    });
});

// Define your API endpoints using Express.js routes
app.use(express.json()); // Enable JSON parsing middleware

app.post("/user-profiles", (req, res) => {
  const { userName, bio, professionalBackground, location } = req.body;

  const query = `
    INSERT INTO UserProfiles (userName, bio, professionalBackground, location)
    VALUES (?, ?, ?, ?)
  `;

  db.run(
    query,
    [userName, bio, professionalBackground, location],
    function (err) {
      if (err) {
        console.error("Error creating user profile:", err.message);
        res.status(500).json({ error: "Failed to create user profile" });
      } else {
        console.log("User profile created with ID:", this.lastID);
        res.status(201).json({ message: "User profile created" });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
