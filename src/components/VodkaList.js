import React, { Component } from 'react';
import request from 'superagent';
//import { Link } from 'react-router-dom';
import CocktailItem from './CocktailItem';

const user = JSON.parse(localStorage.getItem('user'))
const getVodkaList = () => request.get(`https://mighty-plateau-34350.herokuapp.com/vodka`)
    .set('Authorization', user.token);



export default class VodkaList extends Component {
    state = {
        id: [],
        cocktail:[]
    }
async componentDidMount() {
    const data = await getVodkaList()
    console.log(data.body)
    this.setState({
        cocktail: data.body
    })
}

    render() {
        return (
            <div>
                <h2>Vodka Cocktails for fun and pleasure</h2>
                <ul className='vodka-list'>
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