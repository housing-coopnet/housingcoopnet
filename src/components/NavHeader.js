import React, { Component } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/NavHeader.css'
import { Popover, Image, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

class NavHeader extends Component {
     constructor(props) {
          super(props)
          this.state = {
               signup: true,
               authModal: false
          }
     }

     modalClose = () => this.setState({ authModal: false })

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
                                   <NavDropdown.Item><NavLink to="/about#team">TEAM</NavLink></NavDropdown.Item>
                              </NavDropdown>
                              <NavDropdown className="navButton" title="CONNECT" id="basic-nav-dropdown">
                                   <NavDropdown.Item><Nav.Link href="https://www.facebook.com/HousingCoopNet/">FACEBOOK</Nav.Link></NavDropdown.Item>
                                   <NavDropdown.Item><Nav.Link href="https://twitter.com/HousingCoopNet">TWITTER</Nav.Link></NavDropdown.Item>
                                   <NavDropdown.Item><Nav.Link href="https://www.linkedin.com/company/housing-coopnet">LINKEDIN</Nav.Link></NavDropdown.Item>
                                   <NavDropdown.Item><Nav.Link href="https://medium.com/@CoopNetHousing">MEDIUM</Nav.Link></NavDropdown.Item>
                              </NavDropdown>
                              <NavDropdown className="navButton" title="CO-OP TALK" id="basic-nav-dropdown">
                                   <NavDropdown.Item><NavLink to="/cooptalk">CoopTalk</NavLink></NavDropdown.Item>
                              </NavDropdown>
                         </Nav>

                         {/* <Form inline>
                              <Button inline  style={{ maxWidth: "120px" }} onClick={() => this.setState({ authModal: true, signup:true })}>Sign Up</Button>
                              <Button inline className="blue" style={{ maxWidth: "120px" }} onClick={() => this.setState({ authModal: true, signup:false })}>Login</Button>
                         </Form> */}
                    </Navbar.Collapse>
                    {/* <FirebaseContext.Consumer >
                         {firebase => <AuthModal modalShow={this.state.authModal} signup={this.state.signup} onClickAway={this.modalClose} firebase={firebase} />}
                    </FirebaseContext.Consumer> */}
               </Navbar>
          );
     }
}

export default NavHeader;
