import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function PurchaseInfo() {
  return (
    <Form>
    <div className='container'>
      
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Purchase Date</Form.Label>
          <Form.Control type="Date" placeholder="dd-mm-yyyy" />
        </Form.Group>

        
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Product Bill Number</Form.Label>
        <Form.Control type="text "  placeholder='Product bill number' />
      </Form.Group>

      

        
      
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>
  );
}

export default PurchaseInfo;