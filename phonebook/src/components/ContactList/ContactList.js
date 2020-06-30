import React from "react";
//Styles:
import "./ContactList.scss";
import { ListGroup, Button } from "react-bootstrap";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ListGroup variant="flush" className="contact-list">
    {contacts.map(({ name, number, id }) => (
      <ListGroup.Item key={id} className="contact-list__item">
        <p className="contact-list__text">
          {name}: {number}
        </p>
        <Button
          className="contact-list__button"
          variant="outline-danger"
          size="sm"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </Button>
      </ListGroup.Item>
    ))}
  </ListGroup>
);

export default ContactList;
