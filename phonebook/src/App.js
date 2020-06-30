import React, { Component } from "react";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
// ID Generetor:
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  //Функции
  addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: uuidv4(),
    };
    const { contacts } = this.state;
    const findName = contacts.find((cnt) => cnt.name === name);
    const findNumber = contacts.find((cnt) => cnt.number === number);
    // Проверка на заполненость всех полей формы:
    if (name.length === 0 || number.length === 0) {
      alert("Please,  fill in all fields");
      // Пpоверка на наличие добавляемого контакта в существующем списке:
    } else if (findName || findNumber) {
      alert("Contact with that name or phone number is already on your list");
      // Добавление контакта в список:
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <section className="add-contact">
          <h1 className="title">Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </section>
        <section className="contacts">
          <h2 className="title">Contacts</h2>
          {this.state.contacts.length > 2 && (
            <Filter filter={this.state.filter} onChange={this.changeFilter} />
          )}

          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </section>
      </>
    );
  }
}



export default App;
