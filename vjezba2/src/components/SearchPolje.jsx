import React, { Component } from "react";

export default class SearchPolje extends Component {
  render() {
    return (
      <input
        type="search"
        className="search-box"
        placeholder="pretraži"
        onChange={this.props.onFilterChange}
      />
    );
  }
}
