const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commandStringSchema = new Schema({
  name: String,
  commands: String,
});

const CommandString = mongoose.model("CommandString", commandStringSchema);

module.exports = CommandString;
