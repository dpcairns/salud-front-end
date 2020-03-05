import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';
//import Header from './Header.js';
import RandomList from './components/Random.js'
import vodkaImage from './assets/wheat.png';
import ginImage from './assets/gin.png';
import teqImage from './assets/agave.png';
import whiskeyImage from './assets/whiskey2.png';
import scotchImage from './assets/scotch5.png';
import rumImage from './assets/sugarcane.png';
import request from 'superagent';
import SearchBar from './components/SearchBar.js';
import SearchList from './components/SearchList.js';


export default class Home extends Component {
    state= {
        searchQuery: this.props.match.params.name,
        cocktails:[],
        favorites:[]
    }

    async componentDidMount() {

        const user = JSON.parse(localStorage.getItem('user'))
        // const getSearchList = () => request.get(`https://mighty-plateau-34350.herokuapp.com/name/${this.props.match.params.name}`)
        //     .set('Authorization', user.token);

        const getFavorites = () => request.get('https://mighty-plateau-34350.herokuapp.com/favorites')
            .set('Authorization', user.token); 
      
    
    const fave = await getFavorites()
    // const data = await getSearchList()
    // console.log(data.body)
    this.setState({
        // cocktails: data.body,
        favorites: fave.body
    })
}

handleSearch = async e => {
    e.preventDefault();
    const data = await request.get(
      `https://mighty-plateau-34350.herokuapp.com/name/${this.state.searchQuery}`
    );
    this.setState({
      cocktails: data.body 
    });
    this.props.history.push(`/name/${this.state.searchQuery}`);
  };
  handleChange = e => this.setState({ searchQuery: e.target.value });

   
    render() {
        return(

           <div> 
             
           <div className='parent-div'> 
              <div className='drinks-img'>

              <SearchBar
            searchQuery={this.state.searchQuery}
            handleSearch={this.handleSearch}
            handleChange={this.handleChange}
          /> 

                
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