import React, { Component } from 'react';
import LandingPage from './LandingPage';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SaveMatch from './SaveMatch';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route path="/save" component={SaveMatch} />
        </div>
      </Router>
    );
  }
}

export default App;
