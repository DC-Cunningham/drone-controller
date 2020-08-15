import React from "react";
import API from "../utils/API";

const calculateFlightPath = (commands, sequenceName) => {
  let dronePosition = { x: 0, y: 0, step: 0, lastCommand: "" };
  const flightPath = [];
  const photoLocations = [];

  for (let i = 0; i < commands.length; i++) {
    let command = commands.charAt(i);
    switch (command) {
      case "<":
        dronePosition = {
          x: dronePosition.x - 1,
          y: dronePosition.y,
          step: dronePosition.step + 1,
          lastCommand: "<",
        };
        flightPath.push(dronePosition);
        break;
      case ">":
        dronePosition = {
          x: dronePosition.x + 1,
          y: dronePosition.y,
          step: dronePosition.step + 1,
          lastCommand: ">",
        };
        flightPath.push(dronePosition);
        break;
      case "^":
        dronePosition = {
          x: dronePosition.x,
          y: dronePosition.y + 1,
          step: dronePosition.step + 1,
          lastCommand: "^",
        };
        flightPath.push(dronePosition);
        break;
      case "v":
        dronePosition = {
          x: dronePosition.x,
          y: dronePosition.y - 1,
          step: dronePosition.step + 1,
          lastCommand: "v",
        };
        flightPath.push(dronePosition);
        break;
      case "x":
        photoLocations.push({
          x: dronePosition.x,
          y: dronePosition.y,
          photoNumber: photoLocations.length,
        });
        break;
      default:
        return;
    }
  }

  let calculatedFlightPath = {
    flightPath: flightPath,
    photoLocations: photoLocations,
    name: sequenceName,
  };

  return calculatedFlightPath;
};

class NewCommand extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let sequenceName = prompt(
      "Please name your command sequence:",
      "Command Sequence name"
    );

    const commandData = { commands: this.state.value, name: sequenceName };

    API.saveCommand(commandData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    this.setState({ value: "" });
    API.saveFlightpath(calculateFlightPath(commandData.commands, sequenceName))
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Please enter a new command sequence:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NewCommand;
