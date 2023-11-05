import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = newContact => {
    this.setState(prewState => {
      return {
        contacts: [...prewState.contacts, { ...newContact, id: nanoid() }],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId),
      };
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Contacts items={contacts} onDelete={this.deleteContact} />
        <GlobalStyle />
      </div>
    );
  }
}
