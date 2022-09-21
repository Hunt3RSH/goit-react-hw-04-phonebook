import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '777-77-70' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState(() => {
        return {
          contacts: [...JSON.parse(localStorage.getItem('contacts'))],
        };
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onGetDataForm = data => {
    const hasName = this.state.contacts.some(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );
    if (hasName) {
      Notify.warning(`Contact "${data.name}" is already in contacts.`);
      return;
    }

    this.setState(p => ({
      contacts: [...p.contacts, { ...data, id: nanoid() }],
    }));
  };

  deleteItem = deletedId => {
    this.setState(p => ({
      contacts: p.contacts.filter(({ id }) => id !== deletedId),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.onGetDataForm} />
        </Section>
        <Section title="Contacts">
          <Contacts contacts={contacts} onClickDelete={this.deleteItem} />
        </Section>
      </>
    );
  }
}
