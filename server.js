// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data sent to it.

// tells the system you want JSON to be used
app.use(bodyParser.json());
// tells the system whether you want to use a simple algorithm for shallow parsing(false) or complex algorithm for deep parsing that can deal with nested objects(true)
app.use(bodyParser.urlencoded({ extended: true }));
// parse an HTML body into a string
app.use(bodyParser.text());
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER
// The below code "starts" our server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
