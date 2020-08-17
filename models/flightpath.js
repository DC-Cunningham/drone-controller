const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightPathSchema = new Schema({
  name: String,
  sequenceCount: Number,
  photoCount: Number,
  uniquePhotoCount: Number,
  xMin: Number,
  yMin: Number,
  xMax: Number,
  yMax: Number,
  dataPoints: Object,
});

const FlightPath = mongoose.model("FlightPath", flightPathSchema);

module.exports = FlightPath;
