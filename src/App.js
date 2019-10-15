import React, { Component } from 'react';
import Firebase, { FirebaseContext } from './components/Firebase/index'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About/About';
import Mission from './components/About/Mission';
import Vision from './components/About/Vision';
import Team from './components/About/Team';
import Model from './components/About/Model';
import History from './components/About/History';
import CoopTalk from './components/CoopTalk/CoopTalk';

export default class App extends Component {
  render() {
    return (
      <FirebaseContext.Provider value={new Firebase()}>
      <Router>
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
            
                   <Route path="/cooptalk" component={CoopTalk} />
                   <Route path="/cooptalk?" component={CoopTalk} />


        </div>
        </Router>
        </FirebaseContext.Provider>
    );
  }
}