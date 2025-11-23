import React, { Component } from "react";

class ContactListItem extends Component {
  render() {
    const { id, name, number, onDelete } = this.props;

    return (
      <li style={{ marginBottom: "5px" }}>
        {name}: {number}
        <button onClick={() => onDelete(id)} style={{ marginLeft: "10px" }}>
          Delete
        </button>
      </li>
    );
  }
}

export default ContactListItem;
