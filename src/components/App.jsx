import { Component } from "react";
import { nanoid } from "nanoid"

import ContactForm from "./contactForm/contactForm";
import ContactList from "./contactList/contactList";
import Filter from "./Filter/filter";



export class App extends Component {
  state = {
    contacts: [],
    filter: '',    
  }


  createContacts = (contact) => {
    if (this.isDublicate(contact)) {
      return alert (`${contact.name} is already in contacts`);
    }
    this.setState((prev) => {
      const newContact = {
        ...contact,
        id: nanoid()
      } 
      return {
        contacts: [...prev.contacts, newContact]          
      }      
    })       
  }

  isDublicate({name, number}) {
    const {contacts} = this.state;
    const result = contacts.find((contact) => contact.name === name && contact.number === number);
    return result;
  }

  removeContact = (id) => {
    this.setState((prev) => {
      const newContacts = prev.contacts.filter((contact) => contact.id !== id);
      return {
        contacts: newContacts
      }
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    
  }

  getFilteredContacts () {
    const {contacts, filter} = this.state;
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({name, number}) => {
      const normalizedName = name.toLocaleLowerCase();
      const result = normalizedName.includes(normalizedFilter) || number.includes(normalizedFilter);
      return result;
    })
    return filteredContacts;
  }
 
  render() {
    return (
      <div
        // style={{
        //   height: '100vh',
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   fontSize: 40,
        //   color: '#010101'
        // }}
      >
        {/* React homework template */}
        <h2>Phonebook</h2>
        <ContactForm 
          createContacts={this.createContacts}
        /> 
        
        <h2>Contacts</h2>
        <Filter 
          filter={this.state.filter} 
          handleChange={this.handleChange}                

        />
        <ContactList 
          items={this.getFilteredContacts()}
          removeContact={this.removeContact}
        />
      </div>
    )

  }
}



  
