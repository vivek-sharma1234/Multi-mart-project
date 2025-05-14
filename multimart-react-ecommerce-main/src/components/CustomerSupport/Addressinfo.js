import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Addressinfo() {
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
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address</Form.Label>
        <Form.Control type="number " placeholder="Pincode" />
        <Form.Control type="text " placeholder="Address (HouseNo.,Building,street,Area)" />
        <Form.Control type="text " placeholder="Locality/Down" />
        <Row>
          <Col>
          <Form.Group as={Col} controlId="formGridState">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="Multimart">
            <option>Rajpura</option>
            <option>wireless earphones</option>
            <option>Phone</option>
            <option>chair</option>
          </Form.Select>
        </Form.Group>
          </Col>
          <Col>
          <Form.Group as={Col} controlId="formGridState">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="Multimart">
            <option>Punjab</option>
            <option>wireless earphones</option>
            <option>Phone</option>
            <option>chair</option>
          </Form.Select>
        </Form.Group>
          </Col>
        </Row>

      </Form.Group>
       

        
      </Row>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>
  );
}

export default Addressinfo;