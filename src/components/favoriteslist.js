import React, { Component } from 'react';
import request from 'superagent';
import { withRouter } from 'react-router-dom';
import Header from './Header.js';

// should be capitalized: FavoritesList
export default withRouter(class favoritesList extends Component {
    state = {
        favorites:[]
    }

    async componentDidMount() {

        const user = JSON.parse(localStorage.getItem('user'))
        const getFavoritesList = () => request.get('https://mighty-plateau-34350.herokuapp.com/favorites')
            .set('Authorization', user.token);
            
    const fave = await getFavoritesList()
    console.log(fave.body)
    this.setState({
        favorites: fave.body
    })
}

    render() {
        return(
            <div>
                <Header/>
                {
                    this.state.favorites.map
                    (drink =>  (    
                    
                    <div className='fav-list' key={drink.id} to={`/id/${drink.api_id}`} onClick={()=> this.props.history.push(`/id/${drink.api_id}`)}> 

                        
                        <h2>{drink.name}</h2>
                        <img src={drink.image} alt=""/>
                        {
                            this.props.location.pathname !== '/favorites'
                            && this.renderButton(drink) 

}
                        
                        </div>
                        
                        )
                        )

                
                }
            </div>
        )
    }
})