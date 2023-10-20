import express from "express";
import dataAccessLayer from "./dataAccess.mjs";
import passageAuthMiddleware from "./authMiddleware.mjs";
import dotenv from "dotenv";
import psg from "@passageidentity/passage-node";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

// Configure Passage
const passageConfig = {
  appID: process.env.PASSAGE_APP_ID,
  apiKey: process.env.PASSAGE_API_KEY,
};

const passage = new psg(passageConfig);

// Pass the passage instance to your middleware
app.use((req, res, next) => {
  req.passage = passage;
  next();
});

// Root route
app.get("/", (req, res) => {
  res.send("Hello from the Node.js server!");
});

// GET route to retrieve user profiles
app.get("/user-profiles", passageAuthMiddleware, async (req, res) => {
  // Access the Passage user ID from the request, provided by the Passage middleware
  const passageUserID = req.userID;

  if (!passageUserID) {
    return res
      .status(401)
      .json({ error: "User is not authenticated through Passage" });
  }

  try {
    // Fetch the user profile associated with the Passage user ID
    const userProfiles = await dataAccessLayer.getUserProfilesByPassageUserID(
      passageUserID
    );
    // Send the user profiles as a JSON response
    res.json(userProfiles);
  } catch (error) {
    // Handle any errors (e.g., database errors)
    console.error("Error fetching user profiles:", error);
    res.status(500).json({ error: "Failed to fetch user profiles" });
  }
});

// POST route to create/update user profiles
app.post("/user-profiles", passageAuthMiddleware, async (req, res) => {
  const { userName, bio, professionalBackground, location } = req.body;
  console.log("POST /user-profiles route called");

  try {
    await dataAccessLayer.updateUserProfile(
      userName,
      bio,
      professionalBackground,
      location,
      req.userID // Assuming you have the user ID available in the request
    );

    // Fetch the user profiles associated with the Passage user ID
    const userProfiles = await dataAccessLayer.getUserProfilesByPassageUserID(
      req.userID
    );
    console.log("User profile created/updated successfully");

    res.status(201).json({
      message: "User profile created/updated",
      userProfiles,
    });
  } catch (error) {
    console.error("Error creating/updating user profile:", error);
    res.status(500).json({ error: "Failed to create/update user profile" });
  }
});

// Route for authenticating users through Passage
app.post("/auth", async (req, res) => {
  try {
    const userID = await passage.authenticateRequest(req);
    if (userID) {
      // User is authenticated
      const { email, phone } = await passage.user.get(userID);
      const identifier = email ? email : phone;
      res.json({
        authStatus: "success",
        identifier,
      });
    } else {
      // Authentication failed
      res.json({
        authStatus: "failure",
      });
    }
  } catch (e) {
    // Handle any errors that occur during authentication
    console.error(e);
    res.json({
      authStatus: "error",
      error: "An error occurred during authentication.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
