import React, { Component } from 'react';
import '../stylesheets/App.css'
import '../stylesheets/Home.css';
import '../stylesheets/Animations.css'
import { Image, Container, Col, Row, Button } from 'react-bootstrap';
import CarouselSlider from "./CarouselSlider.js"
import NavHeader from "./NavHeader.js"
import NewsletterModal from "./NewsletterModal"
import ReactFullpage from '@fullpage/react-fullpage';

var carouselJson = require("../components/placeholders/homeCarousel.json");
const Link = require("react-router-dom").Link;

export default class Home extends Component {
     constructor(props) {
          super(props)
          this.state = {
               modalShow: false
          }
     }

     modalClose = () => this.setState({ modalShow: false })

     render() {
          return (
               <Container fluid>
                    <NavHeader />
                    <ReactFullpage paddingTop="74px" scrollBar={true}
                         render={({ state, fullpageApi }) => {
                              return (
                                   <ReactFullpage.Wrapper>
                                        <Container fluid className="section" style={{ paddingBottom: "75px" }}>
                                             <CarouselSlider slides={carouselJson.slides} />
                                             <Container fluid className="horizontalBar2">
                                                  <em className = "white body" > OWN A STAKE IN A HOUSING MOVEMENT </em><br />
                                                  <Button onClick={() => this.setState({ modalShow: true })} className = "blue">Follow us</Button>
                                             </Container>
                                        </Container>

                                        <Container fluid className="section" style={{ paddingBottom: "230px" }}>

                                             <Container fluid style={{height: "100%"}} className="section2Row">
                                                  <Row style={{ padding: "15px 0", height: "100%" }}>
                                                       <Col md className="blurbContainer">
                                                            <p>Working to create a network of diverse cooperative communities in which everyone has a place to call home.</p><br />
                                                            <Link to = "/about" style = {{textDecoration: "none"}}>
                                                                 <Button  style={{ marginTop: "30px"}}>ABOUT US</Button>
                                                            </Link>
                                                       </Col>
                                                       <Col md className="jumbo">
                                                            <Image rounded src={require('../images/landing.jpg')} />
                                                       </Col>
                                                  </Row>
                                             </Container>
 
                                             <Container fluid className="horizontalBar3">
                                                  <Row fluid className="badgeRow">
                                                       <Col xs={{ span: 4, order: 1 }} md={{ span: 1, order: 1}}>
                                                            <Image src={require('../images/forimpact.svg')} />
                                                       </Col>
                                                       <Col  xs = {{span: 4, order: 4}} md={{ span: 3, order: 2}}>
                                                            <em className = "title white" >AFFORDABLE</em>
                                                       </Col>
                                                       <Col  xs = {{span: 4, order: 2}} md={{ span: 1, order: 3}}>
                                                            <Image src={require('../images/sustainable.svg')} />
                                                       </Col>
                                                       <Col  xs = {{span: 4, order: 5}} md={{ span: 3, order: 4}}>
                                                            <em className = "title white" >SUSTAINABLE</em>
                                                       </Col>
                                                       <Col  xs = {{span: 4, order: 3}} md={{ span: 1, order: 5}}>
                                                            <Image src={require('../images/community.svg')} />
                                                       </Col>
                                                       <Col  xs = {{span: 4, order: 6}} md={{ span: 3, order: 6}}>
                                                            <em className = "title white" >COOPERATIVE</em>
                                                       </Col>
                                                  </Row>
                                             </Container>

                                             <Container  fluid className="horizontalBar4">
                                                  <Button className = 'bar hvr-rectangle-out' onClick={() => this.setState({ modalShow: true })} fluid> SIGN UP FOR OUR NEWSLETTER</Button>
                                                  <NewsletterModal modalShow={this.state.modalShow} onClickAway={this.modalClose} />
                                             </Container>
                                        </Container>

                                   </ReactFullpage.Wrapper>
                              );
                         }}
                    />
               </Container>
          )
     }
}