import React, { Component } from "react";

export class primjer extends Component {
  state = {
    ime: "",
    prezime: "",
  };

  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Ime"
          value={this.state.ime}
          onChange={this.handleChange("ime")}
        />
        <input
          type="text"
          placeholder="Prezime"
          value={this.state.prezime}
          onChange={this.handleChange("prezime")}
        />
      </form>
    );
  }
}

export default primjer;
