const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightPathSchema = new mongoose.Schema({
  flightPath: [],
});

const FlightPath = mongoose.model("FlightPath", flightPathSchema);

module.exports = FlightPath;
