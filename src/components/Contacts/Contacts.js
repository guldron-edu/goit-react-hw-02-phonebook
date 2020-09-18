import React from "react";
import PropTypes from "prop-types";
import SingleContact from "../SingleContact/SingleContact";
import styles from "./Contacts.module.css";

function Contacts({ visibleContacts, deleteContact }) {
  return (
    <ul className={styles.list}>
      {visibleContacts.map((contact) => (
        <li key={contact.id} className={styles.item}>
          <SingleContact
            name={contact.name}
            number={contact.number}
            id={contact.id}
            deleteContact={deleteContact}
            firstLetters={firstLetters}
          />
        </li>
      ))}
    </ul>
  );
}

function firstLetters(phrase) {
  return phrase
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1).toLowerCase();
    })
    .join(" ");
}

Contacts.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  visibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default Contacts;
