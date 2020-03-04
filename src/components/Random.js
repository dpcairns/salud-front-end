import React, { Component } from 'react';
import request from 'superagent';
//import { Link } from 'react-router-dom';
import CocktailItem from './CocktailItem';

//const user = JSON.parse(localStorage.getItem('user'))

// const getRandomList = () => request.get(`https://mighty-plateau-34350.herokuapp.com/random`)
// .set('Authorization', user.token);



export default class RandomList extends Component {
    state = {
        id: [],
        cocktail:[]
    }
    async componentDidMount() {

        const user = JSON.parse(localStorage.getItem('user'))
        const getRandomList = () => request.get(`https://mighty-plateau-34350.herokuapp.com/random`)
            .set('Authorization', user.token);
            
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
