import React, { Component } from 'react';
import '../stylesheets/App.css';
import { ProgressBar, Container, Col, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Table, Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

function HomeCarousel(props) {
    return (
      <Carousel.Item>
      <img
        className="d-block w-100"
        src={props.slide["image"]}
        alt=""
      />
  
      <Carousel.Caption>
        <h3>{props.slide["header"]}</h3>
        <p>{props.slide["text"]}</p>
      </Carousel.Caption>
      <Button className="carouselButton">{props.slide["button"]}</Button>
    </Carousel.Item>
    );
  }
  
var carouselSlides = [
    {
      "key" : 1,
      "header" : "Slide 1",
      "text" : "Take an interest",
      "button" : "Sign up",
      "image" : "https://thepioneeronline.com/wp-content/uploads/2017/06/GRAFF_12-1500x998.jpg",
    },
    {
      "key" : 2,
      "header" : "Slide 2",
      "text" : "Build a portfolio",
      "button" : "Invest",
      "image" : "https://ww2.kqed.org/wp-content/uploads/sites/2/2018/06/OakMural-7-1020x680.jpg",
    },
    {
      "key" : 3,
      "header" : "Slide 3",
      "text" : "Look at our projects",
      "button" : "Explore",
      "image" : "https://thepioneeronline.com/wp-content/uploads/2017/06/GRAFF_10-1500x998.jpg",
    }
  ]
  
  class CarouselSlider extends Component {
    render() {
        return (
            <Carousel>
            {carouselSlides.map((slide) => <HomeCarousel slide={slide}/>)}
          </Carousel>
     );
    }
    }
    
  export default CarouselSlider;

