const passageAuthMiddleware = async (req, res, next) => {
  try {
    // Access the Passage instance from the request
    const passage = req.passage;

    let userID = await passage.authenticateRequest(req);
    if (userID) {
      // user authenticated
      req.userID = userID;
      next();
    } else {
      // failed to authenticate, return a 401 or other "unauthorized" behavior
      res.status(401).send("Could not authenticate user!");
    }
  } catch (e) {
    // Error during authentication
    console.error("Passage authentication error:", e);
    res.status(500).send("An error occurred during authentication.");
  }
};

export default passageAuthMiddleware;
