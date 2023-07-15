import propTypes from "prop-types";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ContactForm.module.css";
import { addContact } from "../../redux/operations";
import { selectContactsList } from "../../redux/selectors";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      id: nanoid(),
      phone: number,
    };

    const isContactExist = contacts.find(
      (contact) => contact.name.toLocaleLowerCase() === data.name.toLowerCase()
    );

    if (isContactExist) {
      return Notiflix.Notify.failure("The number is already in the phonebook");
    }

    dispatch(addContact(data));
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className="input_name">
        <p>Name</p>
        <input
          className={styles.form__input}
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className="input_number">
        <p>Number</p>
        <input
          className={styles.form__input}
          value={number}
          onChange={handleNumberChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be at least 5 digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button type="submit" className={styles.form__button}>
        Add Contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  name: propTypes.string,
  number: propTypes.string,
};
