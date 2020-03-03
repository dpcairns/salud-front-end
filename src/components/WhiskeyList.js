import React, { Component } from 'react';
import request from 'superagent';
//import { Link } from 'react-router-dom';
import CocktailItem from './CocktailItem';

const getWhiskeyList = () => request.get(`https://mighty-plateau-34350.herokuapp.com/whiskey`);



export default class WhiskeyList extends Component {
    state = {
        id: [],
        cocktail:[]
    }
async componentDidMount() {
    const data = await getWhiskeyList()
    console.log(data.body)
    this.setState({
        cocktail: data.body
    })
}

    render() {
        return (
            <div>
                <h2>Whiskey Cocktails for fun and pleasure</h2>
                <ul className='whiskey-list'>
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