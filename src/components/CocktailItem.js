import React, { Component } from 'react'

export default class CocktailItem extends Component {
    render() {
        console.log('hello world')
        const { cocktail } = this.props;
        return (
            <div className='drink-name'>
                <h2>
                    {cocktail.name}
                </h2>
                <img src ={cocktail.image} alt=""/>

            </div>
        )
    }
}