import React, { Component } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/NavHeader.css'
import { Popover, OverlayTrigger, ProgressBar, Container, Col, Row, Image, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Table, Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import NewsletterModal from "./NewsletterModal"

const popover = (
     <Popover id="popover-basic" title="Member profiles are coming soon!">
          We are in the process of implementing a fully scalable and secure member registration system! Stay tuned.
  </Popover>
);

class NavHeader extends Component {
     constructor(props) {
          super(props)
     }

     render() {
          return (
               <Navbar className="navBar" sticky="top" expand="md">
                    <NavLink to="/"><Navbar.Brand className="homeNav" href="/"><Image width="70" height="70" className="d-inline-block align-top" src={require('../images/Logo.png')} /></Navbar.Brand></NavLink>
                    <NavLink to="/" className="noUnderline"><h3 className="navTitle">COOPNET</h3></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="headerCollapse" id="basic-navbar-nav">
                         <Nav className="mr-auto">
                              <NavDropdown className="navButton" title="ABOUT" id="basic-nav-dropdown">
                                   <NavDropdown.Item><NavLink to="/about">ABOUT US</NavLink></NavDropdown.Item>
                                   <NavDropdown.Divider />
                                   <NavDropdown.Item><NavLink to="/mission">MISSION</NavLink></NavDropdown.Item>
                                   <NavDropdown.Item><NavLink to="/vision">VISION</NavLink></NavDropdown.Item>
                                   <NavDropdown.Item><NavLink to="/model">MODEL</NavLink></NavDropdown.Item>
                                   <NavDropdown.Item><NavLink to="/history">HISTORY</NavLink></NavDropdown.Item>
                                   <NavDropdown.Item><NavLink to="/about#team">ABOUT US</NavLink></NavDropdown.Item>
                              </NavDropdown>
                         </Nav>
                         <Nav className="navButton">
                                   <Nav.Link href="https://www.facebook.com/HousingCoopNet/">
                                        <Image width="30" height="30" src={require("../images/facebook.svg")} />
                                   </Nav.Link>
                                   <Nav.Link href="https://twitter.com/HousingCoopNet">
                                        <Image width="30" height="30" src={require("../images/twitter.svg")} />
                                   </Nav.Link>

                                   <Nav.Link href="https://www.linkedin.com/company/housing-coopnet">
                                        <Image width="30" height="30" src={require("../images/linkedin.svg")} />
                                   </Nav.Link>

                                   <Nav.Link href="https://medium.com/@CoopNetHousing">
                                        <Image width="30" height="30" src={require("../images/medium.svg")} />
                                   </Nav.Link>
                              </Nav>
                    </Navbar.Collapse>
               </Navbar>
          );
     }
}

export default NavHeader;
