import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RandomList from './components/Random.js';
// import Header from './components/Header.js';
// import vodkaImage from './assets/wheat.png';
// import ginImage from './assets/gin.png';
// import teqImage from './assets/agave.png';
// import whiskeyImage from './assets/whiskey2.png';
// import scotchImage from './assets/scotch5.png';
// import rumImage from './assets/sugarcane.png';
export default class Home extends Component {
   
    render() {
        return(
           <div> 
             
                
                <Link to='/vodka'></Link>
        
                <Link to='/gin'> </Link>
                <Link to='/tequila'> </Link>
                <Link to='/scotch'> </Link>
                <Link to='/whiskey'>  </Link>
                <Link to='/rum'></Link> 
             
                <RandomList {...this.props}/>
                


            </div>
        )
    }
    

}