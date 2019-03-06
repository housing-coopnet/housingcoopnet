import React, { Component } from 'react';
import '../stylesheets/App.css';
import { Form, Button, Nav, Tab, Row, Col, ListGroup, Pagination } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import Footer from "../components/Footer.js"
import NavHeader from "../components/NavHeader.js"

function SignupSidebar(props) {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="signupTabs">
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item className="signupTab">
              <Nav.Link className="signupTabLink" eventKey="first">Your Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item className="signupTab">
              <Nav.Link className="signupTabLink" eventKey="second">Identity Verification</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <SignupSidebar />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

function BasicInfo(props) {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
    </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
  </Button>
      </Form>;
    </div>
  )
}

class Signup extends Component {
  render() {
    return (
      <div id="Signup" className="Signup">
        <NavHeader />
        <SignupSidebar />
        <Footer />
      </div>
    );
  }
}

export default Signup;
