import React, { Component } from 'react';
import request from 'superagent';
//import { Link } from 'react-router-dom';
import CocktailItem from './CocktailItem';

const getRandomList = () => request.get(`https://mighty-plateau-34350.herokuapp.com/random`);



export default class RandomList extends Component {
    state = {
        id: [],
        cocktail:[]
    }
async componentDidMount() {
    const data = await getRandomList()
    console.log(data.body)
    this.setState({
        cocktail: data.body
    })
}

    render() {
        return (
            <div>
                <h2>Random Cocktails to amaze your friends</h2>
                <ul className='random-list'>
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