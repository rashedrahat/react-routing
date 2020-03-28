import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from "./components/Navbar";
import Home from './components/Home';
import {Users} from './components/Users';
import User from './components/User';
import About from './components/About';
import Contact from './components/Contact';

class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Navbar/>
            <hr/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/users" exact component={Users}/>
              <Route path="/users/:userId" component={User} />
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
