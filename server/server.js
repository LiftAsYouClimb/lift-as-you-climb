const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
// Enable CORS for all routes or specify allowed origins, methods, etc.
app.use(cors());
const Passage = require('@passageidentity/passage-node');


// create an instance of the Express application

// define the port
const port = process.env.PORT || 4000;

// set up a route for HTTP GET requests to the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello from the Node.js server!');
});

require('dotenv').config();
const CLIENT_URL = "http://localhost:3000";

app.use(express.json());
app.use(
  cors({
    origin: CLIENT_URL,
  })
);

const passage = new Passage({
  appID: process.env.PASSAGE_APP_ID,
  apiKey: process.env.PASSAGE_API_KEY,
  authStrategy: 'HEADER',
});

//passage authentication
app.post('/auth', async (req, res) => {
  try {
    const userID = await passage.authenticateRequest(req);
    if (userID) {
      // user is authenticated
      const { email, phone } = await passage.user.get(userID);
      const identifier = email ? email : phone;

      res.json({
        authStatus: 'success',
        identifier,
      });
    }
  } catch (e) {
    // authentication failed
    console.log(e);
    res.json({
      authStatus: 'failure',
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
