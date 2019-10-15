import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap'
import Modal from 'react-awesome-modal'
import '../stylesheets/Modal.css'

export default class AuthModal extends Component {
     handleSignup(event) {
          const form = event.currentTarget;
          var email = form.signupEmail.value
          var password = form.signupPassword.value
          var displayName = form.signupName.value
          var promise = this.props.firebase.auth.createUserWithEmailAndPassword(email, password)
          promise.then(user => {
               user.updateProfile({
                    displayName: displayName
               });
          }).catch(error => console.log(error.message))
     }

     handleLogin(event) {
          const form = event.currentTarget;
          var email = form.authEmail.value
          var password = form.authPassword.value
          var promise = this.props.firebase.auth.signInWithEmailAndPassword(email, password)
          promise.catch(error => console.log(error.message))
     }

     componentDidMount() {
          this.props.firebase.auth.onAuthStateChanged(firebaseUser => {
               if (firebaseUser) {
                    console.log(firebaseUser);
               } else {
                    console.log("not logged in")
               }
          });
     }

     render() {
          if (!this.props.signup) {
               return (
                    <Modal
                         visible={this.props.modalShow}
                         effect='fadeInUp'
                         {...this.props}
                    >
                         <Container>
                              <p className="formHeader">Log In</p>
                              <Form className="form" onSubmit={e => this.handleLogin(e)}>

                                   <Form.Group controlId="authEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control required type="email" placeholder="Enter Email" />
                                        <Form.Text className="text-muted">
                                             Welcome back!
                                        </Form.Text>
                                        <Form.Control.Feedback type="invalid">
                                             Please provide a valid email address.
                                        </Form.Control.Feedback>
                                   </Form.Group>

                                   <Form.Group controlId="authPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control required type="password" placeholder="Enter Password" />
                                   </Form.Group>

                                   <Button style={{ borderRadius: "20px 20px" }} className="formButton" type="submit">
                                        Login
                                   </Button>

                              </Form>
                         </Container>
                    </Modal>
               )
          }
          else if (this.props.signup) {
               return (
                    <Modal
                         visible={this.props.modalShow}
                         effect='fadeInUp'
                         {...this.props}
                    >
                         <Container>
                              <p className="formHeader">Sign Up</p>
                              <Form className="form" onSubmit={e => this.handleSignup(e)}>

                                   <Form.Group controlId="signupEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control required type="email" placeholder="Enter Email" />
                                        <Form.Text className="text-muted">
                                             We'll send you a welcome email!
                                        </Form.Text>
                                        <Form.Control.Feedback type="invalid">
                                             Please provide a valid email address.
                                        </Form.Control.Feedback>
                                   </Form.Group>

                                   <Form.Group controlId="signupName">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control required type="text" placeholder="Enter Your Name" />
                                   </Form.Group>

                                   <Form.Group controlId="signupPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control required type="password" placeholder="Enter Password" />
                                   </Form.Group>

                                   <Button style={{ borderRadius: "20px 20px" }} className="formButton" type="submit">
                                        Sign Up
                                   </Button>

                              </Form>
                         </Container>
                    </Modal>
               )
          }
     }
}