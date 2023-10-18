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
    }
  } catch (e) {
    // failed to authenticate
    // we recommend returning a 401 or other "unauthorized" behavior
    console.log(e);
    res.status(401).send("Could not authenticate user!");
  }
};

export default passageAuthMiddleware;
