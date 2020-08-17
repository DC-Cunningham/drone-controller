import React from "react";
import API from "../utils/API";

const calculateFlightPath = (commands, name) => {
  let obj = {
    xMin: 0,
    yMin: 0,
    xMax: 0,
    yMax: 0,
    dataPoints: {},
    photoCount: 0,
    uniquePhotoCount: 0,
    sequenceCount: 0,
    name,
  };
  let imageCount = 0,
    totalPhotoCount = 0,
    commandCount = 0,
    currentX = 0,
    currentY = 0;
  for (let char of commands) {
    switch (char) {
      case "<": {
        commandCount++;
        currentX--;
        obj = {
          ...obj,
          sequenceCount: commandCount,
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
        commandCount++;
        currentX++;
        obj = {
          ...obj,
          sequenceCount: commandCount,
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
        commandCount++;
        currentY--;
        obj = {
          ...obj,
          sequenceCount: commandCount,
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
        commandCount++;
        currentY++;
        obj = {
          ...obj,
          sequenceCount: commandCount,
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
        commandCount++;
        imageCount++;
        totalPhotoCount++;
        obj = {
          ...obj,
          photoCount: totalPhotoCount,
          sequenceCount: commandCount,
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

  if (Object.keys(obj.dataPoints).length > 0) {
    const newObj = { ...obj.dataPoints };
    Object.keys(newObj).forEach(
      (key) => newObj[key] === true && delete newObj[key]
    );
    obj = {
      ...obj,
      uniquePhotoCount: Object.keys(newObj).length,
    };
  }
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
