import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';
//import Header from './Header.js';
import RandomList from './components/Random.js'


export default class Home extends Component {
    // logout = () => {
    //     localStorage.clear('token');
    //     this.props.history.push('/');
    // }
    render() {
        return(
            <div>
                <Router>
                <Link to='/vodka'>Vodka</Link>
                <Link to='/gin'>Gin</Link>
                <Link to='/tequila'>Tequila</Link>
                <Link to='/scotch'>Scotch</Link>
                <Link to='/whiskey'>Whiskey</Link>
                <Link to='/rum'>Rum</Link>
                <RandomList {...this.props}/>
                </Router>

         {/* <button onClick={this.logout()}> Log Out</button> */}

            </div>
        )
    }
    

}