import React, { Component } from 'react';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

export class App extends Component {
  state = {
    name: 'LOL',
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    ],
    filter: '',
  };

  handleChange = () => {
    console.log('handleChange in APP');
  };

  onSubmit = data => {
    console.log('onSubmit in APP');
    console.log(data);
    if (data.name === '' || data.number === '' || data.name.includes('  ')) {
      return alert(`Input is still empty !`);
    }
    if (this.state.contacts.find(({ name }) => name === data.name)) {
      alert(`${data.name} is alreaady in list`);
    } else {
      this.setState({
        contacts: [
          ...this.state.contacts,
          { name: data.name, number: data.number, id: nanoid() },
        ],

        number: '',
      });
    }
  };

  onDeleteClick = () => {
    console.log('onDelete in APP');
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.onSubmit}
          name={this.state.name}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        {/* <Filter
          contacts={this.state.contacts}
          value={this.state.filter}
          onChange={this.onFilterChange}
          onDeleteClick={this.onDeleteClick}
        /> */}
        <ListStyled>
          <ContactList
            filterValue={this.state.filter}
            contacts={this.state.contacts}
            onDeleteClick={this.onDeleteClick}
            state={this.state}
          />
        </ListStyled>
      </>
    );
  }
}

const ListStyled = styled.ul`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
