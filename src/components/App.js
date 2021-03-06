import React, { Component } from "react";
import InputForm from "./InputForm/InputForm";
import Filter from "./Filter/Filter";
import Contacts from "./Contacts/Contacts";
import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addNewContact = (name, number) => {
    const tempContact = {
      id: uuidv4(),
      name,
      number,
    };

    this.checkNameAndAdd(name, tempContact);
  };

  checkExistingName = (targetName) => {
    return this.state.contacts
      .map((contact) => contact.name.toLowerCase().trim())
      .includes(targetName.toLowerCase().trim());
  };

  pushToContacts = (contact) => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  checkNameAndAdd = (name, tempContact) => {
    this.checkExistingName(name)
      ? alert(name + ` is already in contacts`)
      : this.pushToContacts(tempContact);
  };

  inputFilterTracking = (ev) => {
    this.setState({ filter: ev.target.value });
  };

  filterContacts = () => {
    return this.state.contacts.filter((contact) =>
      (contact.name.toLowerCase() + contact.number.toLowerCase()).includes(
        this.state.filter.toLowerCase()
      )
    );
  };

  deleteContact = (targetId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== targetId),
      };
    });
  };

  render() {
    const visibleContacts = this.filterContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <InputForm addNewContact={this.addNewContact} />

        {this.state.contacts.length > 0 && <h2>Contacts</h2>}
        {this.state.contacts.length > 1 && (
          <Filter inputTracking={this.inputFilterTracking} />
        )}
        {this.state.contacts.length > 0 && (
          <Contacts
            visibleContacts={visibleContacts}
            deleteContact={this.deleteContact}
          />
        )}
      </>
    );
  }
}
