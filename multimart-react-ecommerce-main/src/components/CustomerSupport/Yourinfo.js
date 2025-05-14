import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Yourinfo() {
  return (
    <Form>
    <div className='container'>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Phone Number" />
        </Form.Group>
      </Row>

      
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email " placeholder="Enter your Email ID" />
      </Form.Group>

      <Row className="mb-3">
        
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Multimart">
            <option>Multimart</option>
            <option>Multimart</option>
          </Form.Select>
        </Form.Group>

        
      </Row>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>
  );
}

export default Yourinfo;