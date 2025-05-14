
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { QRCode } from 'react-qrcode-logo';
import Shipping from './Shipping';
export default function App({totalprice}) {
 
  return (
    <div>
    <Container>
    <Row>
        <Col><Shipping/></Col>
        <Col>
        <QRCode
       value={`upi://pay?pa=8847414135@cnrb&pn=8847414135&tn=cftrhwetaw4gta&am=${totalprice}`}
        size="300"
       
        logoWidth="80"
        logoHeight="100"
        logoOpacity="0.6"
      />
      <p>Scan the code using PhonePe, Google Pay or Paytm</p>
        </Col>
    </Row>
    

    </Container>
      
     
      
     
    </div>
  );
}
