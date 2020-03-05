import React, { Component } from 'react';
import request from 'superagent';
//import { Link } from 'react-router-dom';
import CocktailItem from './CocktailItem';




export default class WhiskeyList extends Component {
    state = {
        id: [],
        cocktail:[],
        favorites: []
    }
    async componentDidMount() {

        const user = JSON.parse(localStorage.getItem('user'))
        const getWhiskeyList = () => request.get(`https://mighty-plateau-34350.herokuapp.com/whiskey`)
            .set('Authorization', user.token);

        const getFavorites = () => request.get('https://mighty-plateau-34350.herokuapp.com/favorites')
            .set('Authorization', user.token); 

    const fave = await getFavorites()       
    const data = await getWhiskeyList()
    console.log(data.body)
    this.setState({
        cocktail: data.body,
        favorites: fave.body
    })
}

makeFavorite = async (drink) => {
    console.log('this works', drink)
    // when the user clicks the makeFavorite button, add this drink to the favorite list
    const user = JSON.parse(localStorage.getItem('user'))
    const fave = await request.post('https://mighty-plateau-34350.herokuapp.com/favorites', {
        name: drink.name,
        image: drink.image
       
    })
    .set('Authorization', user.token)
    console.log('fave', fave.body)
}

renderButton = (drink) => {
    // check the favorites list if we're on the search page
    const isOnFavoritesList = this.state.favorites.find(cocktails => drink.name === cocktails.name);
    if (!isOnFavoritesList) {
    
    return <button onClick={ () => this.makeFavorite(drink)}>Make favorite</button>
    }
    // otherwise, indicate that they ae already on the favorites list
    // this.makeFavorite(drink.id)
    return <span>🍸</span>
}

    render() {
        return (
            <div>
                <h2>Whiskey Cocktails for fun and pleasure</h2>
                <ul className='whiskey-list'>
                {
                        this.state.cocktail.map(cocktail => (
                            <>
                            <div key={cocktail.id} to={`/id/${cocktail.id}`} onClick={()=> this.props.history.push(`/id/${cocktail.id}`)}> 
                    
                            <CocktailItem cocktail={cocktail}/>
                            </div>
                            {this.renderButton(cocktail)}
                    </>
                        )
                        )   
                        }
                </ul>
            </div>
        )
    }
}