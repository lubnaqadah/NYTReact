const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);


// Set up promises with mongoose
mongoose.Promise = global.Promise;

const MONGODB_URI = "mongodb://heroku_0c2p948l:ajo1bd1qt6v27ljq26cqqt3lad@ds135757.mlab.com:35757/heroku_0c2p948l";
// Connect to the Mongo DB
mongoose.connect(
  MONGODB_URI,
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
