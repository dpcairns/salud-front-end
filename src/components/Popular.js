import React, { Component } from 'react';
import request from 'superagent';
//import { Link } from 'react-router-dom';
import CocktailItem from './CocktailItem';


export default class PopularList extends Component {
    state = {
        id: [],
        cocktail:[]
    }
    async componentDidMount() {

        const user = JSON.parse(localStorage.getItem('user'))
        
        const getPopularList = () => request.get(`https://mighty-plateau-34350.herokuapp.com/popular`)
            .set('Authorization', user.token);
            
        const data = await getPopularList()
    console.log(data.body)
    this.setState({
        cocktail: data.body
    })
}

    render() {
        return (
            <div>
                <h2>Popular cocktails to be the life of the party</h2>
                <ul className='popular-list'>
            {
                this.state.cocktail.map(cocktail => 
                    <CocktailItem cocktail={cocktail} />
                    )
            }
                </ul>
            </div>
        )
    }
}