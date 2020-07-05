import React, { Component } from "react";
// Компоненты:
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
// ID Generetor:
import { v4 as uuidv4 } from "uuid";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

<<<<<<< HEAD
=======

>>>>>>> a52ec3fbb4c3872ff33d8c032c3fbc1931cf72df
  addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: uuidv4(),
    };
    const { contacts } = this.state;
    const findName = contacts.find((cnt) => cnt.name === name);
    const findNumber = contacts.find((cnt) => cnt.number === number);
<<<<<<< HEAD
    // Проверка на заполненость всех полей формы:
    if (!name || !number) {
      toast.warn("Please,  fill in all fields", {
        position: "top-right",
        autoClose: 5000,
        });
=======
   
    if (name.length === 0 || number.length === 0) {
      alert("Please,  fill in all fields");
>>>>>>> a52ec3fbb4c3872ff33d8c032c3fbc1931cf72df
      // Пpоверка на наличие добавляемого контакта в существующем списке:
    } else if (findName || findNumber) {
      toast.info(`Contact with name ${name} or phone number ${number} is already on your list`, {
        position: "top-center",
        autoClose: 5000,
        });
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
        <ToastContainer />
      </>
    );
  }
}

export default App;
