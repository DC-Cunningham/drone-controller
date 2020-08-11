import React from "react";
import API from "../utils/API";

const calculateFlightPath = (commands) => {
  let dronePosition = { x: 0, y: 0, step: 0, lastCommand: "" };
  const flightPath = [];
  const photoLocations = [];
  console.log(commands);

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
    }
  }
  return flightPath;
  // const uniquePhotoLocations = photoLocations.reduce((accumulator, current) => {
  //   if (checkIfAlreadyExist(current)) {
  //     return accumulator;
  //   } else {
  //     return [...accumulator, current];
  //   }

  //   function checkIfAlreadyExist(currentVal) {
  //     return accumulator.some((item) => {
  //       return item.x === currentVal.x && item.y === currentVal.y;
  //     });
  //   }
  // }, []);

  // console.log(flightPath);
  // console.log(photoLocations);
  // console.log(uniquePhotoLocations);

  // //The number of commands given to the drone is 5853
  // console.log(commands.length);

  // // The number of Billboard photographs taken is 1195
  // console.log(photoLocations.length);

  // //The number of individual Billboards photographed is 655
  // console.log(uniquePhotoLocations.length);
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
    const calculatedFlightPath = {
      flightPath: calculateFlightPath(commandData.commands),
      name: sequenceName,
    };
    API.saveFlightpath(calculatedFlightPath)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Please enter a new command string:
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
