import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [validated, setValidated] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <section className='page-container'>
            <h2 className='mb-5'>Contact</h2>

    <Form noValidate validated={validated} onSubmit={handleSubmit} className='form-width'>
      <Form.Group controlId="name">
        <p className='form'>Name</p>
        <Form.Control
          required
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <Form.Control.Feedback type="invalid">
          Please enter your name.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="email">
        <p className="form">Email address</p>
        <Form.Control
          required
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email address.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="message">
        <p className='form'>Message</p>
        <Form.Control
          required
          as="textarea"
          rows={3}
          placeholder="Enter your message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
        <Form.Control.Feedback type="invalid">
          Please enter your message.
        </Form.Control.Feedback>
      </Form.Group>

      <Button className='proj-btn' type="submit">
        Submit
      </Button>
    </Form>
    </section>
  );
};

export default ContactForm;