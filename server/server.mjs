import dotenv from "dotenv";
import express from "express";
import psg from "@passageidentity/passage-node";
import passageAuthMiddleware from "./authMiddleware.mjs";
import dataAccessLayer from "./dataAccess.mjs";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

// Configure Passage
const passageConfig = {
  appID: process.env.PASSAGE_APP_ID,
  apiKey: process.env.PASSAGE_API_KEY,
  authStrategy: "HEADER_AUTH",
};

const passage = new psg(passageConfig);

// Pass the passage instance to middleware
app.use((req, res, next) => {
  req.passage = passage;
  next();
});

// Root route
app.get("/", (req, res) => {
  res.send("Hello from the Node.js server!");
});

// TODO: Use an actual token obtained after user authentication.
// Route to fetch user details
app.get("/userDetails", passageAuthMiddleware, async (req, res) => {
  const token = "userToken"; // Replace this with the actual token obtained after user authentication

  try {
    const userData = await getUserDetailsFromPassage(token);
    res.json(userData); // Return user details in response
  } catch (error) {
    console.error("User details retrieval error:", error);
    res.status(500).json({ error: "Failed to fetch user details" });
  }
});

// POST route to create an encouragement Request (climb)
app.post("/requests", passageAuthMiddleware, async (req, res) => {
  const { userId, title, description } = req.body;

  try {
    const requestId = await dataAccessLayer.createRequest(
      userId,
      title,
      description
    );
    res.status(201).json({
      message: "Encouragement Request created",
      requestId,
    });
  } catch (error) {
    console.error("Error creating encouragement Request:", error);
    res.status(500).json({ error: "Failed to create encouragement Request" });
  }
});

// POST route to create an encouragement Response (lift)
app.post("/responses", passageAuthMiddleware, async (req, res) => {
  const { requestId, userId, liftWords } = req.body;

  try {
    const responseId = await dataAccessLayer.createResponse(
      requestId,
      userId,
      liftWords
    );
    res.status(201).json({
      message: "Encouragement Response created",
      responseId,
    });
  } catch (error) {
    console.error("Error creating encouragement Response:", error);
    res.status(500).json({ error: "Failed to create encouragement Response" });
  }
});

// GET route to fetch a specific climb request by ID
app.get("/requests/:requestId", passageAuthMiddleware, async (req, res) => {
  const { requestId } = req.params;

  try {
    const request = await dataAccessLayer.getRequest(requestId);
    if (request.length === 0) {
      return res.status(404).json({ error: "Request not found" });
    }
    res.json(request);
  } catch (error) {
    console.error("Error retrieving request:", error);
    res.status(500).json({ error: "Failed to retrieve request" });
  }
});

// GET route to fetch a specific lift response by ID
app.get("/responses/:responseId", passageAuthMiddleware, async (req, res) => {
  const { responseId } = req.params;

  try {
    const response = await dataAccessLayer.getResponse(responseId);
    if (response.length === 0) {
      return res.status(404).json({ error: "Response not found" });
    }
    res.json(response);
  } catch (error) {
    console.error("Error retrieving response:", error);
    res.status(500).json({ error: "Failed to retrieve response" });
  }
});

// GET route to fetch all lift responses for a specific request
app.get(
  "/requests/:requestId/responses",
  passageAuthMiddleware,
  async (req, res) => {
    const { requestId } = req.params;

    try {
      const responses = await dataAccessLayer.getResponsesByRequest(requestId);
      if (responses.length === 0) {
        return res
          .status(404)
          .json({ error: "No responses found for this request" });
      }
      res.json(responses);
    } catch (error) {
      console.error("Error retrieving responses for the request:", error);
      res
        .status(500)
        .json({ error: "Failed to retrieve responses for the request" });
    }
  }
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
