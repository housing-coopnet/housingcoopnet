import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './Home';
import Signup from './Signup';
import ProjectDashboard from "./ProjectDashboard";
import About from './AboutNew';
import CoopTalk from './CoopTalk';
import Landing from "./Landing";
import Mission from './Mission';
import Vision from './Vision';
import Team from './Team';
import Model from './Model';
import History from './History';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          {/* <Route path = "/home" exact component={Home} /> */}
          {/* <Route path="/signup" component={Signup} /> */}
          <Route path="/about" component={About} />
          {/* <Route path="/cooptalk" component={CoopTalk} />
          <Route path="/project" component={ProjectDashboard} /> */}
          <Route path="/mission" component={Mission} />
          <Route path="/vision" component={Vision} />
          <Route path="/team" component={Team} />
          <Route path="/model" component={Model} />
          <Route path="/history" component={History} />
        </div>
      </Router>
    );
  }
}