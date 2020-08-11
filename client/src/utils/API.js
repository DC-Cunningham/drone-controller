import axios from "axios";

export default {
  getCommands: function () {
    return axios.get("/api/command");
  },
  // Gets the command string with the given id
  getCommand: function (id) {
    console.log(id);
    return axios.get("/api/command/" + id);
  },
  // Deletes the command string with the given id
  deleteCommand: function (id) {
    return axios.delete("/api/command/" + id);
  },
  // Saves a command string to the database
  saveCommand: function (commandData) {
    console.log("saveCommand Hit");
    return axios.post("/api/command", commandData);
  },
  updateCommand: function (commandData) {
    return axios.put("/api/command", commandData);
  },
  getFlightPaths: function () {
    return axios.get("/api/flightpath");
  },
  // Gets the flight path with the given id
  getFlightPath: function (id) {
    return axios.get("/api/flightpath/" + id);
  },
  // Deletes the flight path with the given id
  deleteFlightpath: function (id) {
    return axios.delete("/api/flightpath/" + id);
  },
  // Saves a flight path to the database
  saveFlightpath: function (flightPathData) {
    return axios.post("/api/flightpath", flightPathData);
  },
  updateFlightPath: function (flightPathData) {
    return axios.put("/api/flightpath", flightPathData);
  },
};
