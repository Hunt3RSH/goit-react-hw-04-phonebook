import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  useEffect(() => {
    const saveContacts = localStorage.getItem('contacts');
    if (saveContacts) {
      setContacts(JSON.parse(saveContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onGetDataForm = ({ name, number }) => {
    const contactName = contacts.map(el => el.name);
    if (contactName.includes(name)) {
      Notify.warning(`Contact "${name}" is already in contacts.`);
      return;
    }

    setContacts(el => [...el, { id: nanoid(), name, number }]);
  };

  const deleteItem = deletedId => {
    setContacts(el => el.filter(contact => contact.id !== deletedId));
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={onGetDataForm} />
      </Section>
      <Section title="Contacts">
        <Contacts contacts={contacts} onClickDelete={deleteItem} />
      </Section>
    </>
  );
};
