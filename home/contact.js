import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('http://localhost:5000/contact', formData);
      setSuccess(response.data.message); // Display success message
      setFormData({
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error('Error during form submission:', err.response || err.message); // Log error for debugging
      setError('There was an error submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-light py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h2 className="text-center mb-4">Contact Us</h2>
            <p className="text-center text-muted mb-4">
              Have a question or need assistance? We're here to help you with any inquiries you may have.
            </p>

            <Form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
              <Form.Group controlId="email">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                />
              </Form.Group>

              <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Let us know how we can help you"
                />
              </Form.Group>

              <Form.Group controlId="message">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Leave a comment or question..."
                />
              </Form.Group>

              {loading ? (
                <Button variant="secondary" disabled className="w-100">
                  Submitting...
                </Button>
              ) : (
                <Button variant="primary" type="submit" className="w-100">
                  Submit
                </Button>
              )}
            </Form>

            {success && (
              <Alert variant="success" className="mt-4 text-center">
                {success}
              </Alert>
            )}
            {error && (
              <Alert variant="danger" className="mt-4 text-center">
                {error}
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
