import React, { Component } from 'react';
import favoritesList from './favoriteslist.js';
import request from 'superagent';

export default class Favorites extends Component {
    state = {
        favorites: []

    }
    componentDidMount = async () => {
        const faves = await request.get('https://mighty-plateau-34350.herokuapp.com/favorites')
        .set ('Authorization', this.props.user.token);

        this.setState({ favorites: faves.body});
    
    }
    render () {
        return ( 
        <div> 
        Favorites
        <favoritesList favorites={ this.state.favorites }/>
        </div>
        )
    }
}