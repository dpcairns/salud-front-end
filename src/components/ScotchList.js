import React, { Component } from 'react';
import request from 'superagent';
//import { Link } from 'react-router-dom';
import CocktailItem from './CocktailItem';




export default class ScotchList extends Component {
    state = {
        id: [],
        cocktail:[]
    }
    async componentDidMount() {

        const user = JSON.parse(localStorage.getItem('user'))
        const getScotchList = () => request.get(`https://mighty-plateau-34350.herokuapp.com/scotch`)
            .set('Authorization', user.token);
            
        const data = await getScotchList()
    console.log(data.body)
    this.setState({
        cocktail: data.body
    })
}

    render() {
        return (
            <div>
                <h2>Scotch Cocktails for fun and pleasure</h2>
                <ul className='scotch-list'>
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