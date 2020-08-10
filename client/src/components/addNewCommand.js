import React from "react";
import API from "../utils/API";

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
    alert("A command was submitted: " + this.state.value);
    event.preventDefault();
    const commandData = { commands: this.state.value };
    API.saveCommand(commandData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    this.setState({ value: "" });
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
