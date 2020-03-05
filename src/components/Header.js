import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import vodkaImage from '../assets/vodka.png';
import ginImage from '../assets/gin.png';
import teqImage from '../assets/tequila.png';
import whiskeyImage from '../assets/whiskey.png';
import scotchImage from '../assets/scotch.png';
import rumImage from '../assets/rum.png';
import '../Header.css';

export default class Header extends Component {
    render() {
        return (
       

            <div className='drinks-img'>
         <Link to='/vodka'><img className='vodka-img' src={vodkaImage} alt=''/></Link>
        
        <Link to='/gin'> <img className='gin-img' src={ginImage} alt=''/></Link>
        <Link to='/tequila'>  <img className='tequila-img' src={teqImage} alt=''/></Link>
        <Link to='/scotch'><img className='scotch-img' src={scotchImage} alt=''/></Link>
        <Link to='/whiskey'> <img className='whiskey-img' src={whiskeyImage} alt=''/></Link>
        <Link to='/rum'> <img className='rum-img' src={rumImage} alt=''/></Link>
            
            </div>
        )
    }
}
