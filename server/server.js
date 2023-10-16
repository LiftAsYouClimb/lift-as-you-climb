import express from "express";
// create an instance of the Express application
const app = express();
// define the port
const port = process.env.PORT || 4000;
// set up a route for HTTP GET requests to the root URL ("/")
app.get("/", (req, res) => {
  res.send("Hello from the Node.js server!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
