import React, { Component } from 'react';
import '../stylesheets/App.css';
import { ProgressBar, Image, Container, Col, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Table, Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import Footer from "../components/Footer.js"
import CarouselSlider from "../components/CarouselSlider.js"
import NavHeader from "../components/NavHeader.js"

var projectTiles = [
  {
    "title": "Project 1",
    "description": "This was our first ever project",
    "progress": 50,
    "source": '../images/tile1.jpg',
    "projectNumber": 1,
  },
  {
    "title": "Project 2",
    "description": "This was our second ever project",
    "progress": 2,
    "source": '../images/tile2.jpg',
    "projectNumber": 2,

  },
  {
    "title": "Project 3",
    "description": "This was our third ever project",
    "progress": 10,
    "source": '../images/tile3.jpg',
    "projectNumber": 3,


  },
  {
    "title": "Project 4",
    "description": "This was our fourth ever project",
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
              <Button className="carouselButton" href="/signup">SIGN UP</Button>
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
              <Button className="carouselButton" href="/about">ABOUT US</Button>
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
              <Button className="carouselButton" href="/project">PROJECTS</Button>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

        {/* <CarouselSlider/> */}

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
