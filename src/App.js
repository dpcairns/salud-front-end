import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
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
// import Header from './components/Header.js';
import idList from './components/idList.js'
import PrivateRoute from './PrivateRoute.js';
import myImage from './assets/logo.png';
import SearchList from './components/SearchList.js';
import AboutUs from './components/About-Us.js';



const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));


export default class App extends Component {
  state = { user: null };
      
  setUser = user => {
      this.setState({ user: user.body });
  }
  render() {
    return (
      <div>
<img className='home-img' src={myImage} alt=''/>
        <Router>
        {/* <Header/> */}
          <Switch>
            
            <Route exact path='/id/:myDrink' component={idList}/>
            <Route exact path='/random' component={RandomList}/>
            <Route exact path='/popular' component={PopularList}/>
            // seems to me all of these drinklist routes should have been one DrinkList component that uses params to desice which data to load
            <Route exact path='/all/:drink' component={DrinkList}/>
            <Route exact path='/name/:myCocktail' component={SearchList}/>
            <Route exact path='/about-us' component={AboutUs}/>
            // try to use the PrivateRoute for this
            <Route exact path='/' render={(historyprops) =>
            isLoggedIn()
            ? <Home {...historyprops}/>
            : <Redirect to='login' />
          }/>


          <Route exact path='/login' render={(props) => <SaludLogin {...props} setUser={ this.setUser } user={this.state.user }/>}/>
          <Route exact path='/favorites' component={favoritesList}/>
          </Switch>
        </Router>
      </div>
    );
  }
}