import React,  { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  //Link,
  Switch,
} from 'react-router-dom';
 import VodkaList from './components/VodkaList.js';
 import GinList from './components/GinList.js';
 import RumList from './components/RumList.js';
 import TequilaList from './components/TequilaList.js';
 import ScotchList from './components/ScotchList.js';
 import WhiskeyList from './components/WhiskeyList.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/vodka' component={VodkaList}/>
            <Route exact path='/gin' component={GinList}/>
            <Route exact path='/tequila' component={TequilaList}/>
            <Route exact path='/rum' component={RumList}/>
            <Route exact path='/scotch' component={ScotchList}/>
            <Route exact path='/whiskey' component={WhiskeyList}/>

          </Switch>
        </Router>
      </div>
    );
  }
}