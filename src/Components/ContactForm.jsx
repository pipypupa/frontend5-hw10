import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);

    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          placeholder="Name"
        />

        <input
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          title="Phone number must be digits and can contain spaces, dashes, parentheses."
          required
          placeholder="Phone"
          style={{ marginLeft: "10px" }}
        />

        <button type="submit" style={{ marginLeft: "10px" }}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
