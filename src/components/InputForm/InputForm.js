import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./InputForm.module.css";

import Input from "../Input/Input";

export default class InputForm extends Component {
  static propTypes = {
    addNewContact: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };
  inputTracking = (ev) => {
    ev.preventDefault();
    this.setState({ [ev.target.name]: ev.target.value });
  };

  submitForm = (ev) => {
    ev.preventDefault();

    this.props.addNewContact(this.state.name, this.state.number);
    this.resetInputForm();
  };

  resetInputForm = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={styles.inputForm} onSubmit={this.submitForm}>
        <label className={styles.label}>
          Name
          <Input
            type={"input"}
            name={"name"}
            value={this.state.name}
            inputTracking={this.inputTracking}
            minLength={3}
            required
            autoFocus
          />
        </label>
        <label className={styles.label}>
          Number
          <Input
            type={"number"}
            name={"number"}
            value={this.state.number}
            inputTracking={this.inputTracking}
            minLength={10}
            required
          />
        </label>
        <button className={styles.btn} type={"submit"}>
          Add contact
        </button>
      </form>
    );
  }
}
