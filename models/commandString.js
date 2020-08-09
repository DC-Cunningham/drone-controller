const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commandStringSchema = new mongoose.Schema({
  commands: String,
});

const CommandString = mongoose.model("CommandString", commandStringSchema);

module.exports = CommandString;
