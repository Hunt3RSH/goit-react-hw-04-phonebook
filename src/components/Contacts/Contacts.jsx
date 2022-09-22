import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactsListItem,
  ContactsName,
  WrapperContainer,
} from './Contact.styled';
import { InputField } from 'components/InputField/InputField';
import { Notification } from 'components/Notification/Notification';
import { ContactFormButton } from 'components/ContactForm/ContactForm.styled';

export class Contacts extends Component {
  state = {
    filter: '',
  };

  handleInputChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { filter } = this.state;
    const { contacts, onClickDelete } = this.props;
    const filteredContacts = contacts.filter(el => el.name);

    return (
      <WrapperContainer>
        <InputField
          label="Find contacts by name"
          value={filter}
          onChange={this.handleInputChange}
          type="text"
          name="filter"
        />

        {!filteredContacts.length ? (
          <Notification message="Contact list is empty." />
        ) : (
          <ContactsList>
            {filteredContacts.map(({ id, name, number }) => (
              <ContactsListItem key={id}>
                <ContactsName>{name}</ContactsName>
                <span>{number}</span>
                <ContactFormButton
                  type="button"
                  onClick={() => onClickDelete(id)}
                >
                  Delete
                </ContactFormButton>
              </ContactsListItem>
            ))}
          </ContactsList>
        )}
      </WrapperContainer>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
