import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <ContactForm />
        <GlobalStyle />
      </div>
    );
  }
}
