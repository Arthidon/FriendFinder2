// DEPENDENCIES
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser')

// EXPRESS CONFIG
var app = express();
var PORT = process.env.PORT || 8080;

// Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));
// Default directory
app.use(express.static(path.join(__dirname, 'app/public')));

// Router
require("./app/routing/api-route.js")(app);
require("./app/routing/html-route.js")(app);



// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });