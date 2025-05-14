import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import emailjs from 'emailjs-com';
import { NavLink } from 'react-router-dom';

function Shipping() {
  const [toEmail, setToEmail] = useState('recipient@example.com');

  const sendEmail = (e) => {
    e.preventDefault();

    // Make sure to declare 'subject' and 'message' variables or get them from the form.
    const subject = 'Your Subject Here'; // Example subject
    const message = 'Your Message Here'; // Example message

    emailjs.send('service_gvwv4xs', 'template_i60be14', {
      from_email: toEmail,
      subject: subject,
      message: message,
    }, '5DQ8f6EzAa8M5yhl2')
      .then((response) => {
        console.log('Email sent:', response);
      })
      .catch((error) => {
        console.error('Email send error:', error);
      });
  };

  return (
    <Form onSubmit={sendEmail}>
      <Row className="mb-1">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Enter Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Phone Number" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email Address"
          value={toEmail}
          onChange={(e) => setToEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridLandmark">
        <Form.Label>Landmark</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <button>
       <NavLink to="/orderplaced"> Submit</NavLink>
       </button>
     
    </Form>
  );
}

export default Shipping;
