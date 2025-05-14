import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"
import WhatsAppButton from "../Contacting/WhatsAppButton"
import PhoneCall from "../Contacting/PhoneCall"
import Email from "../Contacting/Email"
import {Link} from  'react-router-dom';
const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>Multimart</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About Us</h2>
              <ul>
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Customer Care</h2>
              <ul>
              <li><Link to="/complaintpages">Complaint</Link></li>
                <li>Help Center </li>
                <li>How to Buy </li>
                <li>Track Your Order </li>
                <li>Corporate & Bulk Purchasing </li>
                <li>Returns & Refunds </li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>509 Marco Polo, Chitkara University, Rajpura Punjab </li>
                <li>Email: uilib.help@gmail.com</li>
                <li>Phone: +1 1123 456 780</li>
                <li>Click on the any contacting option our team will reach out you with in 10 sec</li>
                <Container>
<Row>
<Col><WhatsAppButton/></Col>
                <Col><PhoneCall/></Col>
                <Col><Email/></Col>
</Row>
                </Container>
                
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
