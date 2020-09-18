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

    this.checkExistingName(name)
      ? alert(name + ` is already in contacts`)
      : this.setState((prevState) => {
          return {
            contacts: [...prevState.contacts, tempContact],
          };
        });
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

  checkExistingName = (targetName) => {
    return this.state.contacts
      .map((contact) => contact.name.toLowerCase())
      .includes(targetName.toLowerCase());
    // return this.state.contacts.filter(
    //   (contact) => contact.name.toLowerCase() === targetName.toLowerCase()
    // );
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
        <h2>Contacts</h2>

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
