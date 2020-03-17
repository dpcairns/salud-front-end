import React, { Component } from 'react';
import RandomList from './components/Random.js'
 import request from 'superagent';
 import SearchBar from './components/SearchBar.js';
import Header from './components/Header.js';

// no need to define this in the class, since it doesn't need anything from the class. better to define it with all the other api calls in api.js

const getFavorites = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    request.get('https://mighty-plateau-34350.herokuapp.com/favorites')
    .set('Authorization', user.token); 
}

export default class Home extends Component {
    state= {
        searchQuery: this.props.match.params.name,
        cocktails:[],
        favorites:[]
    }

    async componentDidMount() {    
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
             <Header/>
              <SearchBar
            searchQuery={this.state.searchQuery}
            handleSearch={this.handleSearch}
            handleChange={this.handleChange}
          />
             <div className='random'>
                // nice spreadin'!
                <RandomList {...this.props}/>
            </div>
            </div>
            
        )
    }
    

}