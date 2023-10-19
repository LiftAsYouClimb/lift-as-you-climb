import express from "express";
import dataAccessLayer from "./dataAccess.mjs";
import passageAuthMiddleware from "./authMiddleware.mjs";
import dotenv from "dotenv";
import { db } from "./database.mjs";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
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

app.post("/user-profiles", async (req, res) => {
  const { userName, bio, professionalBackground, location } = req.body;
  console.log("POST /user-profiles route called");

  try {
    const userId = await dataAccessLayer.updateUserProfile(
      userName,
      bio,
      professionalBackground,
      location
    );

    // Fetch the updated list of profiles AFTER the profile is created
    const userProfiles = await dataAccessLayer.getUserProfiles();
    console.log("User profile created successfully");

    res.status(201).json({
      message: "User profile created",
      userProfiles,
    });
  } catch (error) {
    console.error("Error creating user profile:", error);
    res.status(500).json({ error: "Failed to create user profile" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
