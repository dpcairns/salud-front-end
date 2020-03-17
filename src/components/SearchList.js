import React, { Component } from 'react';
import request from 'superagent';
import CocktailItem from './CocktailItem';




export default class SearchList extends Component {
    state = {
        id: [],
        cocktail:[],
        favorites:[]
    }
    async componentDidMount() {

        const user = JSON.parse(localStorage.getItem('user'))
        const getSearchList = () => request.get(`https://mighty-plateau-34350.herokuapp.com/name/${this.props.match.params.myCocktail}`)
            .set('Authorization', user.token);
        
        const getFavorites = () => request.get('https://mighty-plateau-34350.herokuapp.com/favorites')
            .set('Authorization', user.token); 

        const fave = await getFavorites()    
        const data = await getSearchList()
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
        image: drink.image,
        api_id: drink.id 
       
    })
    .set('Authorization', user.token)
    console.log('fave', fave.body)
}
renderButton = (drink) => {
    // check the favorites list if we're on the search page
    const isOnFavoritesList = this.state.favorites.find(cocktails => drink.name === cocktails.name);
    if (!isOnFavoritesList) {
    
    return <button className='fav-btn' onClick={ () => this.makeFavorite(drink)}>Add to Favorites🍹</button>
    }
    // otherwise, indicate that they ae already on the favorites list
    // this.makeFavorite(drink.id)
    return <span>🍸</span>
}

    render() {
    //this looks a lot like the Random.js component render method
        return (
            <div>
                <h2 className='search-h2'> Cocktails</h2>
                <ul className='search-list'>
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