import React, { Component } from 'react';
import '../stylesheets/App.css';
import { ProgressBar, Container, Col, Row, Image, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Table, Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
class NavHeader extends Component {
  render() {
    return (
      <Navbar sticky="top" bg="light" expand="md">
        <NavLink to="/"><Navbar.Brand className="homeNav" href="/"><Image width="70" height="70" className="d-inline-block align-top" src={require('../images/Logo.png')} /></Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="headerCollapse" id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/project"><Button className ="navButton" variant="light">Projects</Button></NavLink>
            <Button variant="light"><NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavLink to="/about"><NavDropdown.Item href="#action/3.0">About Us</NavDropdown.Item></NavLink>
              <NavDropdown.Divider />
              <NavLink to="/about"><NavDropdown.Item href="#action/3.1">Our Mission</NavDropdown.Item></NavLink>
              <NavLink to="/about"><NavDropdown.Item href="#action/3.2">Our Vision</NavDropdown.Item></NavLink>
              <NavLink to="/about"><NavDropdown.Item href="#action/3.3">Our Model</NavDropdown.Item></NavLink>
              <NavLink to="/about"><NavDropdown.Item href="#action/3.4">Our Team</NavDropdown.Item></NavLink>
            </NavDropdown></Button>
            <NavLink to="/cooptalk"><Button className ="navButton"  variant="light">CoopTalk</Button></NavLink>
            <NavLink to="/signup"><Button className ="navButton"  variant="light">Sign Up</Button></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavHeader;
