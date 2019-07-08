import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './components/Home';
import About from './components/AboutNew';
import Mission from './components/Mission';
import Vision from './components/Vision';
import Team from './components/Team';
import Model from './components/Model';
import History from './components/History';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
                   <Route path="/" exact component={Home} />
                   <Route path="/?" component={Home} />

                   <Route path="/about" component={About} />
                   <Route path="/about?" component={Home} />

                   <Route path="/mission" component={Mission} />
                   <Route path="/mission?" component={Mission} />

                   <Route path="/vision" component={Vision} />
                   <Route path="/vision?" component={Vision} />

                   <Route path="/team" component={Team} />
                   <Route path="/team?" component={Team} />

                   <Route path="/model" component={Model} />
                   <Route path="/model?" component={Model} />

                   <Route path="/history" component={History} />
                   <Route path="/history?" component={History} />
        </div>
      </BrowserRouter>
    );
  }
}