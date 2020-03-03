import React,  { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  //Link,
  Switch,
} from 'react-router-dom';
 import VodkaList from './components/VodkaList.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/list' component={VodkaList}/>
          </Switch>
        </Router>
      </div>
    );
  }
}