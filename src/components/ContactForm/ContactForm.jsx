import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ContactFormButton, ContactFormStyle } from './ContactForm.styled';
import { InputField } from 'components/InputField/InputField';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);

    resetForm();
  };

  return (
    <ContactFormStyle onSubmit={handleFormSubmit}>
      <InputField
        label="Name"
        value={name}
        onChange={handleInputChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <InputField
        label="Number"
        value={number}
        onChange={handleInputChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <ContactFormButton type="submit">Add contact</ContactFormButton>
    </ContactFormStyle>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
