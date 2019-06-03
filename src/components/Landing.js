import React, { Component } from 'react';
import '../stylesheets/Landing.css';
import { Input, Image, Container, Col, Row, Button } from 'react-bootstrap';
import firebase from "../config/fbConfig"
const db = firebase.firestore()

class Landing extends Component {
     constructor(props) {
          super(props)
          this.state = {
               email: "",
          }

          function emailIsValid(email) {
               return /\S+@\S+\.\S+/.test(email)
          }
          
          this.handleChange = (event) => {
               this.setState({ email: event.target.value })
               if (emailIsValid(this.state.email)) {
                    event.target.style.borderColor = "#59af22"
               } else {
                    event.target.style.borderColor = "#3d3d3d"
               }
               if (event.target.style.borderColor == "rgb(204, 86, 86)") {
                    event.target.style.borderColor = "#3d3d3d";
               }
          }

          this.handleSubmit = (event) => {
               let emailInput = document.getElementById("emailInput")
               
               if (emailIsValid(this.state.email)) {
                    var userData = db.collection("userData")
                    let query = userData.where("email", "==", this.state.email);
                    query.get().then((querySnapshot) => {
                         if (querySnapshot.empty) {
                              userData.add({ email: this.state.email })
                                   .then((docRef) => {
                                        console.log("Document written with ID: ", docRef.id);
                                   })
                                   .catch((error) => {
                                        console.error("Error adding document: ", error);
                                   });
                              emailInput.value = ""
                              event.target.innerText = "DONE"
          
                         } else {
                              alert("This email address is already on the list")
                         }
                    })
               } else {
                    emailInput.style.borderColor = "#cc5656"
               }
          }

          // this.adjustHeight = () => {
          //      let infoContainer = document.getElementsByClassName("jumbo")
          //      return (window.innerHeight - infoContainer.style.height - 173);
          // }
     }

     render() {
          return (
               <Container fluid noGutters={true}>
                    <Row style={{ paddingTop: 100, paddingBottom: 100, paddingLeft: 75, paddingRight: 75, height: window.innerHeight - 173 }}>
                         <Col lg>
                              <Row className="titleContainer">
                                   <h1> COOPNET </h1>
                              </Row>
                              <Row className="blurbContainer">
                                   <p>A network of diverse cooperative communities in which everyone has a place to call home.</p>
                              </Row>
                         </Col>
                         <Col className="jumbo" lg>
                              <Image fluid rounded src={require('../images/landing.jpg')} />
                         </Col>
                    </Row>
                    <Row className="horizontalBar">
                         <h1>JOIN THE MOVEMENT THAT IS REDEFINING COOPERATIVE HOUSING</h1>
                    </Row>
                    <Container id = "infoContainer" style={{ height:  "100%"}} className="infoContainer" fluid>
                         <Row fluid className="tileContainer">
                              <Col xs style={{paddingTop: 40 }}> <Image className="tile" src={require("../images/tile1.jpg")} rounded /></Col>
                              <Col xs style={{paddingTop: 40 }}> <Image className="tile" src={require("../images/tile2.jpg")} rounded /></Col>
                              <Col xs style={{paddingTop: 40 }}> <Image className="tile" src={require("../images/tile3.jpg")} rounded /></Col>
                              <Col xs style={{paddingTop: 40 }}> <Image className="tile" src={require("../images/tile4.jpg")} rounded /></Col>
                              {/* {projectTiles.map((tile) => <ProjectTile tile={tile} />)} */}
                         </Row>
                         <Row className="grabber">
                              <h1>Are you interested in joining, starting, or funding a co-op?</h1>
                              <h1>Follow the movement with our newsletter.</h1>
                         </Row>
                         <Row className = "formContainer">
                              <Col sm className="emailContainer"><input id = "emailInput" spellCheck= "false" placeholder = "Your Email" autoComplete className="emailInput" type="email" onChange={(event) => this.handleChange(event)}></input> </Col>
                              <Col sm><Button className="submitButton" onClick={(event) => this.handleSubmit(event)}>
                                   SIGN UP
                         </Button></Col>
                         </Row>
                    </Container>
               </Container>
          );
     }
}

export default Landing;