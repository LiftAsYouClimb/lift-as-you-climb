import express from "express";
import dataAccessLayer from "./dataAccess.mjs";
import passageAuthMiddleware from "./authMiddleware.mjs";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
// set up a route for HTTP GET requests to the root URL ("/")
app.get("/", (req, res) => {
  res.send("Hello from the Node.js server!");
});

// Define a GET route to retrieve user profiles
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
