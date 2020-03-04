import React, { Component } from 'react';
import request from 'superagent';
import { withRouter } from 'react-router-dom';

export default withRouter(class favoritesList extends Component {
    makeFavorite = async(drink) => {
        const fave = await request.post('https://mighty-plateau-34350.herokuapp.com/favorites', {
            name: drink.name,
            image: drink.image,

        })
        .set('Authorization', this.props.user.token)
    }

    renderButton = (drink) => {
        const onFavoritesList = this.props.favorites.find(favorites => drink.name === favorites.name);
        if (!onFavoritesList) {
            return <button onClick={(e)=> this.makeFavorite(drink)}Favorite>I like this Drink</button>
        }
        return <span>🍸</span>
    }

    render() {
        return(
            <div>
                {
                    this.props.favorites.map(drink => <div key={drink.name} className="drink-box">
                        <div>{drink.name}</div>
                        <div>{drink.image}</div>
                        {
                            this.props.location.pathname !== '/favorites'
                            && this.renderButton(drink) 

}
                        
                        </div>)
                }
            </div>
        )
    }
})