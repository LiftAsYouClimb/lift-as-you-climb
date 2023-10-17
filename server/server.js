const express = require("express");
const app = express();
const passageAuthMiddleware = require("./authMiddleware"); // Import the middleware

// define the port
const port = process.env.PORT || 4000;
// set up a route for HTTP GET requests to the root URL ("/")
app.get("/", (req, res) => {
  res.send("Hello from the Node.js server!");
});

app.get("/authenticatedRoute", passageAuthMiddleware, async (req, res) => {
  // Access the userID variable from the res object
  let userID = res.userID;

  // Now, we can use the userID in your route logic
  // For example, we might use it to fetch user-specific data or perform actions on behalf of the authenticated user
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
