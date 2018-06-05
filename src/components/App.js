import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Game from './Game';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Game}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

