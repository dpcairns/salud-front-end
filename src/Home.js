import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Switch, 
} from 'react-router-dom';
//import Header from './Header.js';
import RandomList from './components/Random.js'

export default class Home extends Component {
    render() {
        return(
            <div>
                <Link to='/vodka'>Vodka</Link>
                <Link to='/gin'>Gin</Link>
                <Link to='/tequila'>Tequila</Link>
                <Link to='/scotch'>Scotch</Link>
                <Link to='/whiskey'>Whiskey</Link>
                <Link to='/rum'>Rum</Link>
                <Route exact path='/random' component={RandomList}/>
            </div>
        )
    }
}