import React, { Component } from 'react';
import '../../stylesheets/App.css';
import { Container } from 'react-bootstrap';
import QuestionCard from "./QuestionCard";
import NavHeader from "../NavHeader.js"

var testQuestion = {
     title: "This is a test question! Oops, I mean: This is a test question?",
     description: "It's a rather difficult one to answer",
     tags: ["potato", "pohtathtou"],
}

class CoopTalk extends Component {
    render() {
         return (
              <Container fluid>
          <NavHeader />
        <Container className="page">
                        <QuestionCard question={testQuestion} />
        </Container>
        </Container>
   );
}
}


export default CoopTalk;
