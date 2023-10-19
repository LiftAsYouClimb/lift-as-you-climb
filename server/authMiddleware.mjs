import psg from "@passageidentity/passage-node";

const passageConfig = {
  appID: process.env.PASSAGE_APP_ID,
};

let passage = new psg(passageConfig);

let passageAuthMiddleware = async (req, res, next) => {
  try {
    let userID = await passage.authenticateRequest(req);
    if (userID) {
      // user authenticated
      res.userID = userID;
      next();
    } else {
      // failed to authenticate, return a 401 or other "unauthorized" behavior
      res.status(401).send("Could not authenticate user!");
    }
  } catch (e) {
    // Error during authentication
    console.error(e);
    res.status(500).send("An error occurred during authentication.");
  }
};

export default passageAuthMiddleware;
