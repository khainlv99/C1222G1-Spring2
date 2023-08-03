const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000; // Choose a different port number

// Use the cors middleware to enable CORS for all routes
app.use(cors());

// ... Define your API routes and other server logic ...

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
