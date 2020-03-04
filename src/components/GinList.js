import React, { Component } from 'react';
import request from 'superagent';
//import { Link } from 'react-router-dom';
import CocktailItem from './CocktailItem';

const user = JSON.parse(localStorage.getItem('user'))
const getGinList = () => request.get(`https://mighty-plateau-34350.herokuapp.com/gin`)
    .set('Authorization', user.token);



export default class GinList extends Component {
    state = {
        id: [],
        cocktail:[]
    }
async componentDidMount() {
    const data = await getGinList()
    console.log(data.body)
    this.setState({
        cocktail: data.body
    })
}

    render() {
        return (
            <div>
                <h2>Gin Cocktails for fun and pleasure</h2>
                <ul className='gin-list'>
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