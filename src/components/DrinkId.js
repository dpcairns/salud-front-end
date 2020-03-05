
import React, { Component } from 'react'
import '../drinkID.css';
export default class DrinkId extends Component {
    render() {
        console.log('hello world')
        const { cocktail } = this.props;
        console.log('|| props', this.props);
        return (
          <>
                <h2>
                    {cocktail.Name}
                </h2>
            <div className='drink-name'>

                <img className='detail-image' src ={cocktail.Image} alt=""/>

                <div>
                <p className= 'drink-id'>
                    {cocktail.id}
                </p>
        
                      <p className='ing-ptag'>Ingredients: </p>

                 <ul className='ing'>
                 <li className='ing-li'> 
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
                    <p className='instructions-ptag'>Instructions:</p>
                <p className='instructions'>
                {cocktail.Instructions}
                </p>
            </div>
            </div>
            </>
        )
    }
}