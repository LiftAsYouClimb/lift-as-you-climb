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

// Pass the passage instance to your middleware
app.use((req, res, next) => {
  req.passage = passage;
  next();
});

// Root route
app.get("/", (req, res) => {
  res.send("Hello from the Node.js server!");
});

// POST route to create an encouragement Request
app.post("/requests", passageAuthMiddleware, async (req, res) => {
  const { userId, title, description, emojiResponses } = req.body;

  try {
    const requestId = await dataAccessLayer.createRequest(
      userId,
      title,
      description,
      emojiResponses
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

// POST route to create an encouragement Response
app.post("/responses", passageAuthMiddleware, async (req, res) => {
  const { requestId, userId, type, words, resources, linkDescription } =
    req.body;

  try {
    const responseId = await dataAccessLayer.createResponse(
      requestId,
      userId,
      type,
      words,
      resources,
      linkDescription
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
