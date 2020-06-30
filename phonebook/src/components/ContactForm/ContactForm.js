import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
//Styles:
import "./ContactForm.scss";
import { Button, Form, Col, Row } from "react-bootstrap";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  //Переменные
  nameInputId = uuidv4();
  phoneInputId = uuidv4();
  // Функции событий
  handleChange = (event) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <Form className="form">
        <Row>
          <Col>
            <Form.Control
              className="form__item"
              type="text"
              name="name"
              value={this.state.name}
              id={this.nameInputId}
              onChange={this.handleChange}
              placeholder="Contact name:"
            />
          </Col>
          <Col>
            <Form.Control
              className="form__item"
              type="phone"
              name="number"
              value={this.state.number}
              id={this.phoneInputId}
              onChange={this.handleChange}
              placeholder="Phone number:"
            />
          </Col>
        </Row>
        <Button
          size="sm"
          className="form__submit"
          type="submit"
          name="contact"
          onClick={this.handleSubmit}
          variant="outline-info"
        >
          Add Contact
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
