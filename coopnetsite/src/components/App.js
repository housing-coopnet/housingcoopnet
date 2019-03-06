import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'

import Home from './Home';
import Signup from './Signup';
import ProjectDashboard from "./ProjectDashboard";
import About from './About';
import CoopTalk from './CoopTalk';

export default class App extends Component {
  render() {
    return (
<Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={About} />
          <Route path="/cooptalk" component={CoopTalk} />
          <Route path="/project" component={ProjectDashboard} />
      </div>
    </Router>
    );
  }
}