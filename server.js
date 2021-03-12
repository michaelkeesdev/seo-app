const express = require("express");
const app = express(); // Run the app by serving the static files
const port = process.env.PORT || 8080;
// in the dist directory
app.use(express.static(__dirname + "/dist/seo-basic"));
// Start the app by listening on the default
// Heroku port
app.listen(port);

app.all("/*", function (req, res) {
  res.sendFile(__dirname + "/dist/seo-basic/index.html");
});

console.log("Running on port: " + port);
