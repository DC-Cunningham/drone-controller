import React from "react";
import API from "../utils/API";

const calculateFlightPath = (commands, name) => {
  let obj = {
    xMin: 0,
    yMin: 0,
    xMax: 0,
    yMax: 0,
    dataPoints: {},
    name,
  };
  let imageCount = 0,
    currentX = 0,
    currentY = 0;
  for (let char of commands) {
    switch (char) {
      case "<": {
        currentX--;
        obj = {
          ...obj,
          xMin: obj.xMin > currentX ? currentX : obj.xMin,
          dataPoints: {
            ...obj.dataPoints,
            [`${currentX},${currentY}`]: Array.isArray(
              obj.dataPoints[`${currentX},${currentY}`]
            )
              ? obj.dataPoints[`${currentX},${currentY}`]
              : true,
          },
        };
        break;
      }
      case ">": {
        currentX++;
        obj = {
          ...obj,
          xMax: obj.xMax < currentX ? currentX : obj.xMax,
          dataPoints: {
            ...obj.dataPoints,
            [`${currentX},${currentY}`]: Array.isArray(
              obj.dataPoints[`${currentX},${currentY}`]
            )
              ? obj.dataPoints[`${currentX},${currentY}`]
              : true,
          },
        };
        break;
      }
      case "v": {
        currentY--;
        obj = {
          ...obj,
          yMin: obj.yMin > currentY ? currentY : obj.yMin,
          dataPoints: {
            ...obj.dataPoints,
            [`${currentX},${currentY}`]: Array.isArray(
              obj.dataPoints[`${currentX},${currentY}`]
            )
              ? obj.dataPoints[`${currentX},${currentY}`]
              : true,
          },
        };
        break;
      }
      case "^": {
        currentY++;
        obj = {
          ...obj,
          yMax: obj.yMax < currentY ? currentY : obj.yMax,
          dataPoints: {
            ...obj.dataPoints,
            [`${currentX},${currentY}`]: Array.isArray(
              obj.dataPoints[`${currentX},${currentY}`]
            )
              ? obj.dataPoints[`${currentX},${currentY}`]
              : true,
          },
        };
        break;
      }
      case "x": {
        imageCount++;
        obj = {
          ...obj,
          dataPoints: {
            ...obj.dataPoints,
            [`${currentX},${currentY}`]: Array.isArray(
              obj.dataPoints[`${currentX},${currentY}`]
            )
              ? [...obj.dataPoints[`${currentX},${currentY}`], imageCount]
              : [imageCount],
          },
        };
      }
      default: {
        break;
      }
    }
  }
  console.log(obj);
  return obj;
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
