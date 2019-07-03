import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap'
import Modal from 'react-awesome-modal'
import '../stylesheets/Modal.css'
import firebase from "../config/fbConfig"
import ReactFullpage from '@fullpage/react-fullpage';
import ModalHeader from 'react-bootstrap/ModalHeader';
const db = firebase.firestore()

export default class NewsletterModal extends Component {
     constructor(props) {
          super(props)
          this.state =
               {
                    email: '',
                    first_name: '',
                    last_name: '',
                    emailUnique: false
               }
               // Connect to firebase userData Collection
          this.userData = db.collection("userData")
     }


     async validEmail() {
          var emailQueryPromise = this.userData.where("email", "==", this.state.email)
          let emailQuery = await emailQueryPromise
          emailQuery.get().then((querySnapshot) => {
               console.log(querySnapshot)

               if (querySnapshot.empty) {
                    // this.setState({ emailUnique: true })
                    console.log(this.state.email + " is a new email address and should be added.")
                    return true;

               } else {
                    // this.setState({ emailUnique: false })
                    console.log(this.state.email + " is already an email in the database.")
                    return false;
               }

          });
     }

     handleSubmit(event) {
          const form = event.currentTarget;
          this.setState(
               {
               email: form.formEmail.value,
               first_name: form.formFirst.value,
               last_name: form.formLast.value
               },
               () => {
                    if (this.validEmail()) {
                         // Create entry in userData triggers email send through firebase function firestoreEmail via sendgrid
                         this.userData.add({ email: this.state.email, first_name: this.state.first_name, last_name: this.state.last_name })
                         .then((docRef) => {
                              console.log("Document written with ID: ", docRef.id);
                         })
                         .catch((error) => {
                              console.error("Error adding document: ", error);
                         });
                    } else { alert("This email address is already on the newsletter!"); return}     
          })
     }

     render() {
          return (
               <Modal
                    visible={this.props.modalShow}
                    effect='fadeInUp'
                    {...this.props}
               >
                    <Container>
                         <p className = "formHeader">Sign up for our newsletter! We're super excited to be expanding our community of storytellers, residents, advocates and backers!</p>
                         <Form className="form" onSubmit = {e => this.handleSubmit(e)}>
                              <Form.Group controlId="formFirst">
                                   <Form.Label>First Name</Form.Label>
                                   <Form.Control required type="text" placeholder="Enter First Name" />
                              </Form.Group>
                              <Form.Group controlId="formLast">
                                   <Form.Label>Last Name</Form.Label>
                                   <Form.Control required type="text" placeholder="Enter Last Name" />
                              </Form.Group>

                              <Form.Group controlId="formEmail">
                                   <Form.Label>Email address</Form.Label>
                                   <Form.Control required type="email" placeholder="Enter Email" />
                                   <Form.Text className="text-muted">
                                        We'll send you a welcome email!
                                   </Form.Text>
                                   <Form.Control.Feedback type="invalid">
                                        Please provide a valid email address.
                                   </Form.Control.Feedback>
                              </Form.Group>
                              <Button style={{borderRadius: "20px 20px"}} className = "formButton" type="submit">
                                   Sign Up
                              </Button>
                         </Form>
                    </Container>
               </Modal>
          );
     }
}
