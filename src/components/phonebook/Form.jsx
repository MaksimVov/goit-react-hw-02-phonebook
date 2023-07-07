import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div
          style={{
            border: '2px solid black',
            width: '500px',
          }}
        >
          <h2>Name</h2>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            required
          />
          <h2>Number</h2>
          <input
            onChange={this.handleChange}
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button>Add contact</button>
        </div>
        <ul>
          {this.state.contacts.map(contact => {
            return <li key={nanoid()}>{contact}</li>;
          })}
        </ul>
      </form>
    );
  }
}
