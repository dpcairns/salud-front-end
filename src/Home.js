import React, { Component } from 'react';
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
           <div className='parent-div'> 
              <div className='drinks-img'>

              <SearchBar
            searchQuery={this.state.searchQuery}
            handleSearch={this.handleSearch}
            handleChange={this.handleChange}
          /> 
                
                <Link to='/vodka'> <p className='vodka-ptag'>Vodka</p> <img className='vodka-img' src={vodkaImage} alt=''/></Link>
        
                <Link to='/gin'> <p className='gin-ptag'> Gin</p> <img className='gin-img' src={ginImage} alt=''/></Link>
                <Link to='/tequila'> <p className='tequila-ptag'>Tequila </p> <img className='tequila-img' src={teqImage} alt=''/></Link>
                <Link to='/scotch'> <p className='scotch-ptag'> Scotch</p> <img className='scotch-img' src={scotchImage} alt=''/></Link>
                <Link to='/whiskey'> <p className='whiskey-ptag'> Whiskey</p> <img className='whiskey-img' src={whiskeyImage} alt=''/></Link>
                <Link to='/rum'> <p className='rum-ptag'> Rum</p> <img className='rum-img' src={rumImage} alt=''/></Link>
                </div>
                <RandomList {...this.props}/>
                


            </div>
        )
    }
    

}