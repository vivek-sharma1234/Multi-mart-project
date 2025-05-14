import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function Productinfo() {
  return (
    <Form>
    <div className='container'>
      
    <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Product Group</Form.Label>
          <Form.Select defaultValue="Multimart">
            <option>sofa</option>
            <option>wireless earphones</option>
            <option>Phone</option>
            <option>chair</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Product Name" />
        </Form.Group>

        {/* <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.label>Problem Description</Form.label>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel> */}

      

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>
  );
}

export default Productinfo;