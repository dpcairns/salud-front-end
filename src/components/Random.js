import React, { Component } from 'react';
import request from 'superagent';
import { Link } from 'react-router-dom';
import CocktailItem from './CocktailItem';

//const user = JSON.parse(localStorage.getItem('user'))

// const getRandomList = () => request.get(`https://mighty-plateau-34350.herokuapp.com/random`)
// .set('Authorization', user.token);



export default class RandomList extends Component {
    state = {
        id: [],
        cocktail:[],
        favorites:[]
    }
    async componentDidMount() {

        const user = JSON.parse(localStorage.getItem('user'))
        const getRandomList = () => request.get(`https://mighty-plateau-34350.herokuapp.com/random`)
            .set('Authorization', user.token);
        const getFavorites = () => request.get('https://mighty-plateau-34350.herokuapp.com/favorites')
            .set('Authorization', user.token); 
        const fave = await getFavorites()
        const data = await getRandomList()
        console.log(data.body)
        this.setState({
            cocktail: data.body,
            favorites: fave.body
    })
}
makeFavorite = async (drink) => {
    console.log('List', this.props)
    // when the user clicks the makeFavorite button, add this drink to the favorite list
    const user = JSON.parse(localStorage.getItem('user'))
    const fave = await request.post('https://mighty-plateau-34350.herokuapp.com/favorites', {
        name: drink.name,
        image: drink.image,
       
    })
    .set('Authorization', user.token)
    console.log('fave', fave.body)
}
renderButtonOrStar = (drink) => {
    // check the favorites list if we're on the search page
    const isOnFavoritesList = this.state.favorites.find(person => drink.name === person.name);
    if (!isOnFavoritesList) {
        // if they're not on the list, give user option to add them to favorites
        // we are iterarting through a list, and we need the item in a function, so we make an anonymous function that CALLS that function on click with the right arguments
    return <button onClick={ (e) => this.makeFavorite(drink)}>Make favorite</button>
    }
    // otherwise, indicate that they ae already on the favorites list
    return <span>⭐</span>
}
render() {
    return (
        <div>
                <h2>Random Cocktails to amaze your friends</h2>
                <ul className='random-list'>
            {
                this.state.cocktail.map(cocktail => (
                    <div key={cocktail.id} to={`/id/${cocktail.id}`} onClick={()=> this.props.history.push(`/id/${cocktail.id}`)}> 

                    <CocktailItem cocktail={cocktail}/>
                    {this.renderButtonOrStar(cocktail)}
                    </div>
                )
                )   
                }
                </ul>
            </div>
        )
    }
}

{/* <CocktailItem cocktail={cocktail} onClick={this.props.history.push(`/id/${cocktail.id}`)}/> */}
