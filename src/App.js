import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
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
 import PrivateRoute from './PrivateRoute.js';
 import favoritesList from './components/favoriteslist.js';
 

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/login' component={SaludLogin}/>
            <Route exact path='/random' component={RandomList}/>
            <Route exact path='/popular' component={PopularList}/>
            <Route exact path='/vodka' component={VodkaList}/>
            <Route exact path='/gin' component={GinList}/>
            <Route exact path='/tequila' component={TequilaList}/>
            <Route exact path='/rum' component={RumList}/>
            <Route exact path='/scotch' component={ScotchList}/>
            <Route exact path='/whiskey' component={WhiskeyList}/>
                <PrivateRoute exact path="/" component={Search} user={this.state.user} />
                <PrivateRoute exact path="/favorites" component={favoritesList} user={this.state.user} />
                <Route exact path="/login" render={(props) => <Login {...props} setUser={ this.setUser } user={this.state.user }/>} />
          </Switch>

            <Link to="/favorites">Favorites</Link>
            <Link to="/">Search</Link>
            <Link to="/login">Login</Link>
        </Router>
      </div>
    );
  }
}