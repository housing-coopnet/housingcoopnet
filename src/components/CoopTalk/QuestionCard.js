import React, { Component } from 'react';
import '../../stylesheets/App.css';
import { Container, Col, Row, Button } from 'react-bootstrap';

export default class QuestionCard extends Component {
     constructor(props) {
          super(props)
          this.state = {
               question: props.question
          }
     }

     render() {
          return (
               <Container className="card">
                    <Row>
                    <Col>
                         <h3>
                              {this.state.question.title}
                         </h3>
                         </Col>
                    </Row>
                    <Row>
                         {/* Needs to be defined, passes in the question's date to display how long ago it was posted */}
                         {/* <ProfileTag profile={this.state.question.profile} time={this.state.question.time} /> */}
                    </Row>
                    <Row>
                         <p>{this.state.question.description.substring(0, 150)}...</p>
                    </Row>
                    <Row>
                         {this.state.question.tags.map((tag) => <Button className="tag">{tag}</Button>)}
                    </Row> 
               </Container>
          )
     }
}