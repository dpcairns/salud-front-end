import React, { Component } from 'react';
import request from 'superagent';
import DrinkId from './DrinkId.js';




export default class IdList extends Component {
    state = {
        id: [],
        cocktail:[]
    }
    async componentDidMount() {

        const user = JSON.parse(localStorage.getItem('user'))
        console.log('componentDidMount')
        const getIdList = () => request.get(`https://mighty-plateau-34350.herokuapp.com/id/${this.props.match.params.myDrink}`)
            .set('Authorization', user.token);
            
        const data = await getIdList()
    console.log('||', data.body)
    this.setState({
        cocktail: data.body
    })
}

    render() {
        console.log('|| cocktail', this.state.cocktail)
        return (
            <div>
                <h2>Cocktails of your choice for fun and pleasure</h2>
                <ul className='drink-list'>
            {
                this.state.cocktail.length && this.state.cocktail.map(cocktail => 
                    <DrinkId cocktail={cocktail} />
                    )
            }
                </ul>
            </div>
        )
    }
}