const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes/");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.set("useFindAndModify", false);

const { FlightPath, CommandString } = require("./models");

async function main() {
  // Connect to the Mongo DB
  await mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/FlightPathDB",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  );

  // Serve up static assets
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  app.get("/api/flightpath", async (req, res) => {
    console.log("server hit");
    const flightPath = await FlightPath.find();
    return res.json(flightPath);
  });

  // Use apiRoutes
  app.use(routes);

  app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
}

main();
