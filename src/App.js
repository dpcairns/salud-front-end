import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
 import VodkaList from './components/VodkaList.js';
 import GinList from './components/GinList.js';
 import RumList from './components/RumList.js';
 import TequilaList from './components/TequilaList.js';
 import ScotchList from './components/ScotchList.js';
 import WhiskeyList from './components/WhiskeyList.js';
 import PopularList from './components/Popular.js';
 import RandomList from './components/Random.js';
 import SaludLogin from './saludLogin.js';
 import favoritesList from './components/favoriteslist.js';
import Home from './Home.js';

 const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));
 

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/random' component={RandomList}/>
            <Route exact path='/popular' component={PopularList}/>
            <Route exact path='/vodka' component={VodkaList}/>
            <Route exact path='/gin' component={GinList}/>
            <Route exact path='/tequila' component={TequilaList}/>
            <Route exact path='/rum' component={RumList}/>
            <Route exact path='/scotch' component={ScotchList}/>
            <Route exact path='/whiskey' component={WhiskeyList}/>
            <Route exact path='/' render={() =>
            isLoggedIn()
            ? <Home />
            : <Redirect to='login' />
          }/>
          <Route exact path='/login' component={SaludLogin}/>
          <Route exact path='/favorites' component={favoritesList}/>

          </Switch>

            <Link to="/favorites">Favorites</Link>
            <Link to="/login">Login</Link>
        </Router>
      </div>
    );
  }
}