import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder="Find contacts"
        style={{ marginBottom: "20px" }}
      />
    );
  }
}

export default Filter;
