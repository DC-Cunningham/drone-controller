const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ limit: "25mb" }, { extended: true }));
app.use(express.json({ limit: "25mb" }));
mongoose.set("useFindAndModify", false);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
}
app.get("*", function (_, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"), function (
    err
  ) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://user1:0naGgxIfdAfFfgzw@cluster0.se6jy.mongodb.net/test",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
