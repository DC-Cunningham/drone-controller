const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightPathSchema = new Schema({
  name: String,
  flightPath: [],
});

const FlightPath = mongoose.model("FlightPath", flightPathSchema);

module.exports = FlightPath;
