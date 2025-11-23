import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "../src/Components/ContactForm";
import ContactList from "../src/Components/ContactList";
import Filter from "../src/Components/Filter";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (name, number) => {
    const normalizedName = name.toLowerCase();

    const exists = this.state.contacts.some(
      (c) => c.name.toLowerCase() === normalizedName
    );

    if (exists) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState((prev) => ({
      contacts: [...prev.contacts, newContact],
    }));
  };

  deleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((c) => c.id !== id),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const normalized = this.state.filter.toLowerCase();
    return this.state.contacts.filter((c) =>
      c.name.toLowerCase().includes(normalized)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div style={{ padding: "20px" }}>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>

        <Filter value={this.state.filter} onChange={this.changeFilter} />

        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}

export default App;
