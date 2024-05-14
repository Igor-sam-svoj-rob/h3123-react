import React, { Component } from "react";

export default class HelloCl extends Component {
  render() {
    return (
      <div>
        <p>
          Hello {this.props.ime} {this.props.prezime}
        </p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
