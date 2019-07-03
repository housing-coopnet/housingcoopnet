import React, { Component } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/Carousel.css'
import { Container, Button, Carousel, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

function CarouselSlide(props) {
     console.log("Loading slide")
     console.log(props.slide)
     return (
          < Carousel.Item >
               <img className="d-block w-100" src={"https://thecozyapron.com/wp-content/uploads/2018/03/dijon-roasted-potatoes_thecozyapron_1.jpg"} alt="" />
               <Carousel.Caption>
                    <h3>{props.slide.header}</h3>
                    <p>{props.slide.text}</p>
               </Carousel.Caption>
          </Carousel.Item >
     )
}

class CarouselSlider extends Component {
     constructor(props) {
          super(props);
          this.state = {
               slides: this.props.slides
          };
     }

     render() {
          return (
               <Carousel>
                    < Carousel.Item >
                         <img className="carouselImage" src={require("../images/problem.jpg")} alt="" />
                         <Container className="carouselCaption">
                              <h5 className = "white">Make affordable cooperative housing accessible for everyone</h5>
                              <NavLink to="/mission">
                                   <Button className = "blue">Our Mission</Button>
                              </NavLink>
                         </Container>
                    </Carousel.Item >
                    < Carousel.Item >
                         <img className="carouselImage" src={require("../images/aerial.jpg")} alt="" />
                         <Container className="carouselCaption">
                              <h5  className = "white">A network of diverse cooperative communities to call home.</h5>
                              <NavLink to="/vision">
                                   <Button className="blue">Our Vision</Button>
                              </NavLink>
                         </Container>
                    </Carousel.Item >
                    < Carousel.Item >
                         <img className="carouselImage" src={require("../images/carouselHolder.jpg")} alt="" />
                         <Container className="carouselCaption">
                              <h5 className = "white">Connect, Empower, and Finance housing cooperatives with socially conscious investors. </h5>
                              <NavLink to="/vision">
                                   <Button className="blue">Our Model</Button>
                              </NavLink>
                         </Container>
                    </Carousel.Item >

               </Carousel>
          );
     }
}

export default CarouselSlider;

