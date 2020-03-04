import React, { Component } from 'react';
import request from 'superagent';
//import { Link } from 'react-router-dom';
import CocktailItem from './CocktailItem';

const user = JSON.parse(localStorage.getItem('user'))
const getRumList = () => request.get(`https://mighty-plateau-34350.herokuapp.com/rum`)
    .set('Authorization', user.token);



export default class RumList extends Component {
    state = {
        id: [],
        cocktail:[]
    }
async componentDidMount() {
    const data = await getRumList()
    console.log(data.body)
    this.setState({
        cocktail: data.body
    })
}

    render() {
        return (
            <div>
                <h2>Rum Cocktails for fun and pleasure</h2>
                <ul className='rum-list'>
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