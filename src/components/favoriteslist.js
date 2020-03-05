import React, { Component } from 'react';
import request from 'superagent';
import { withRouter } from 'react-router-dom';



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
                {
                    this.state.favorites.map(drink => <div key={drink.name} className="drink-box">
                        <div>{drink.name}</div>
                        <img src={drink.image} alt=""/>
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