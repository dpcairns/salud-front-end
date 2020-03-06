import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';


export default class Header extends Component {
    render() {
        return (
       

            <div className='drinks'>
        <Link className='vodka' to='/vodka'>Vodka</Link>

<Link className='gin' to='/gin'> Gin</Link>
<Link className='tequila' to='/tequila'> Tequila </Link>
<Link className='scotch' to='/scotch'> Scotch</Link>
<Link className='whiskey' to='/whiskey'> Whiskey </Link>
<Link className='rum' to='/rum'>Rum</Link> 
<Link className='popular' to='/popular'>Popular Drinks</Link>
<Link className='favorites' to='/favorites'> Favorites</Link>
<Link className='home' to='/'> Home</Link>
            </div>
        )
    }
}
