import React, { Component } from 'react';
import '../stylesheets/App.css';
import { Popover, OverlayTrigger, ProgressBar, Container, Col, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Table, Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

const popover = (
     <Popover id="popover-basic" title="Member profiles are coming soon!">
          We are in the process of implementing a fully scalable and secure member registration system! Stay tuned.
     </Popover>
);

function HomeCarousel(props) {
     return (
          <Carousel.Item>
               <img className="d-block w-100" src={require("../images/carousel1.jpg")} alt="" />
               <Carousel.Caption>
                    <h3>{props.slide["header"]}</h3>
                    <p>{props.slide["text"]}</p>
                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                         <NavLink to="/">
                              <Button className="carouselButton">{props.slide["button"]}</Button>
                         </NavLink>
                    </OverlayTrigger>
               </Carousel.Caption>
          </Carousel.Item>
     );
}
class CarouselSlider extends Component {
     constructor(props) {
          super(props);
          // this.state = {
          //      slides : this.props.slides
          // };
     }

     render() {
          return (
                    <Carousel>
                         {this.props.slides.map((slide) => <HomeCarousel key={slide.key} slide={slide} />)}
                    </Carousel>
          );
     }
}

export default CarouselSlider;

