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
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/FlightPathDB",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);
const connection =
  "mongodb+srv://user1:CAWTeCCKJPH8iuK@cluster0.se6jy.mongodb.net/test";
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
