
import React, { Component } from 'react'

export default class DrinkId extends Component {
    render() {
        console.log('hello world')
        const { cocktail } = this.props;
        console.log('|| props', this.props);
        return (
            <div className='drink-name'>

                <h2>
                    {cocktail.Name}
                </h2>
                <img src ={cocktail.Image} alt=""/>
                <p>
                    {cocktail.id}
                </p>
        
                    <ul>
                 <li>
                  {cocktail.Ingredients[0]} 
                  {cocktail.Measurement[0]}
                </li>  
                <li>
                  {cocktail.Ingredients[1]} 
                  {cocktail.Measurement[1]}
                </li> 
                <li>
                  {cocktail.Ingredients[2]}
                  {cocktail.Measurement[2]}
                </li> 
                <li>
                  {cocktail.Ingredients[3]}
                  {cocktail.Measurement[3]}
                </li> 
                <li>
                  {cocktail.Ingredients[4]} 
                  {cocktail.Measurement[4]}
                </li> 
                <li>
                  {cocktail.Ingredients[5]} 
                  {cocktail.Measurement[5]}
                </li> 
                <li>
                  {cocktail.Ingredients[6]} 
                  {cocktail.Measurement[6]}
                </li> 
                    </ul>
                <p>
                {cocktail.Instructions}
                </p>

            </div>
        )
    }
}