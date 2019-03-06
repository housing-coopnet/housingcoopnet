import React, { Component } from 'react';
import '../stylesheets/App.css';
import { ProgressBar, Container, Col, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Table, Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
class Footer extends Component {
    render() {
      return (
<Container className="footer" fluid>
<Row>
  <Col>
    <Jumbotron className="footerJumbo" fluid>
      <h1>CoopNet</h1>
    </Jumbotron>
  </Col>
  <Col>
    <h2>
      Get started
  </h2>
    <ul className="footerLinks">
      <li>
        <a href="#index">INVESTMENTS</a>
      </li>
      <li>
        <a href="#index">OUR IMPACT</a>
      </li>
      <li>
        <a href="#index">HOW IT WORKS</a>
      </li>
    </ul>
  </Col>
  <Col>
    <h2>
      Company
  </h2>
    <ul className="footerLinks">
      <li>
        <a href="#index">ABOUT</a>
      </li>
      <li>
        <a href="#index">CAREERS</a>
      </li>
      <li>
        <a href="#index">COOPTALK</a>
      </li>
      <li>
        <a href="#index">CONTACT</a>
      </li>
    </ul>
  </Col>
  <Col>
    <h2>
      Legal
  </h2>
    <ul className="footerLinks">
      <li>
        <a href="#index">DISCLAIMER</a>
      </li>
      <li>
        <a href="#index">T&CS</a>
      </li>
      <li>
        <a href="#index">ISA T&CS</a>
      </li>
      <li>
        <a href="#index">COMPLAINTS</a>
      </li>
    </ul>
  </Col>
  <Col>
    <h2>
      Support
  </h2>
    <ul className="footerLinks">
      <li>
        <a href="#index">HELP CENTER</a>
      </li>
      <li>
        <a href="#index">ISSUER ENQUIRIES</a>
      </li>
    </ul>
  </Col>
</Row>
            </Container>
   );
}
}

export default Footer;
