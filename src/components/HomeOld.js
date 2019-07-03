import React, { Component } from 'react';
import '../stylesheets/App.css';
import {Popover, OverlayTrigger, ProgressBar, Image, Container, Col, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Table, Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import Footer from "../components/Footer.js"
import CarouselSlider from "../components/CarouselSlider.js"
import NavHeader from "../components/NavHeader.js"

const popover = (
  <Popover id="popover-basic" title="Member profiles are coming soon!">
   We are in the process of implementing a fully scalable and secure member registration system! Stay tuned.
  </Popover>
);
var carouselSlides = [
     {
       "key" : 1,
       "header" : "Slide 1",
       "text" : "Take an interest",
       "button" : "Sign up",
       "image" : "../images/carousel1.jpg",
     },
     {
       "key" : 2,
       "header" : "Slide 2",
       "text" : "Build a portfolio",
       "button" : "Invest",
       "image" : "../images/carousel2.jpg",
     },
     {
       "key" : 3,
       "header" : "Slide 3",
       "text" : "Look at our projects",
       "button" : "Explore",
       "image" : "../images/carousel3.jpg",
     }
   ]
 
var projectTiles = [
  {
    "title": "Oakland City Residence",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis eros in euismod viverra. Sed vitae pulvinar nulla, sollicitudin euismod sem. ",
    "progress": 50,
    "source": '../images/tile1.jpg',
    "projectNumber": 1,
  },
  {
    "title": "Berkeley Student Cooperative",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis eros in euismod viverra. Sed vitae pulvinar nulla, sollicitudin euismod sem. ",
    "progress": 2,
    "source": '../images/tile2.jpg',
    "projectNumber": 2,

  },
  {
    "title": "Diablo Valley Affordable Homes",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis eros in euismod viverra. Sed vitae pulvinar nulla, sollicitudin euismod sem. ",
    "progress": 10,
    "source": '../images/tile3.jpg',
    "projectNumber": 3,


  },
  {
    "title": "SF Roofing Act",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis eros in euismod viverra. Sed vitae pulvinar nulla, sollicitudin euismod sem. ",
    "progress": 20,
    "source": '../images/tile4.jpg',
    "projectNumber": 4,
  },
]

function ProjectTile(props) {
  return (
    <Col><a href="/project">
      <div class="tile">
        <div class="tile-inner">

          <div class="tile-front">
            {console.log(process.cwd())}
            <img src={require("../images/tile" + props.tile["projectNumber"] + ".jpg")} alt="" />
          </div>
          <div class="tile-back">

            <h1>{props.tile["title"]}</h1>
            <p>{props.tile["description"]}</p>
            <p>Learn more</p>

          </div>

        </div>
        <ProgressBar variant="success" class="projectProgress" animated now={props.tile["progress"]} />
      </div>
    </a>
    </Col>
  );
}

class Home extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
{/* 
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../images/carousel1.jpg')}
              alt=""
            />

            <Carousel.Caption>
              <h3>Take an Interest</h3>
              <p>Join us</p>
              <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <NavLink to="/"><Button className="carouselButton">SIGN UP</Button></NavLink>
            </OverlayTrigger>


            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../images/carousel2.jpg')}
              alt=""
            />

            <Carousel.Caption>
              <h3>We're on a mission</h3>
              <p>Put roofs over people's heads.</p>
              <NavLink to="/about"><Button className="carouselButton">ABOUT US</Button></NavLink>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../images/carousel3.jpg')}
              alt=""
            />

            <Carousel.Caption>
              <h3>Certified Partners</h3>
              <p>The best intentions</p>
              <NavLink to="/project"><Button className="carouselButton" >PROJECTS</Button></NavLink>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel> */}

        <CarouselSlider slides = {carouselSlides}/>

        <Container className="introJumboContainer">
          <Row>
            <Col><Jumbotron className="introJumbo" fluid>
              <h1>Housing for everyone.</h1>
              <p>
                We are on a mission to bring direct investments from development-minded backers to our community in order to make affordable housing accessible to everyone.
              </p>
              <Button className="introJumboButton" variant="light" href="/about">Learn more about our mission</Button>
            </Jumbotron></Col>
            <Col xs={5}><Image roundedCircle src={require('../images/introJumboImage.jpg')} /></Col>
          </Row>
        </Container>

        <Container className="tileContainer" fluid>
          <Row className="tileRow">
            {projectTiles.map((tile) => <ProjectTile tile={tile} />)}
          </Row>
          <Row className="tileRow">
            {projectTiles.map((tile) => <ProjectTile tile={tile} />)}
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default Home;
