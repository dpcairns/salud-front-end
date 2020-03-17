import React, { Component } from 'react'
import '../drinkID.css';

// very cool function! it should, however, be defined outside the class, since it doesn't depend on the class to work
const makeDrinkStrings = (ingredientArray, measurementArray) => {
    return ingredientArray.map((ingredient, i) => {
        if (ingredient !== null ) {
        return ingredient + ' ' + measurementArray[i]
        }
    })
    }
export default class DrinkId extends Component {
    render() {
        const { cocktail } = this.props;

        const stringArray = makeDrinkStrings(cocktail.Ingredients, cocktail.Measurement) 
        const elementArray = stringArray.map(string => (
          <li>{string}</li>
        ))
          return (
            <div className='drink-name'>
                  <h2>{cocktail.Name}</h2>
                  <img className='detail-image' src ={cocktail.Image} alt=""/>
                         <p className='ing-ptag'>Ingredients: </p>
                 <ul className='ing'>
                     {elementArray}

                    </ul>
                    <p className='instructions-ptag'>How to make your tasty drink:</p>
                    <p className='instructions'>
                      {cocktail.Instructions}
                     </p>
          </div>
        )
    }
}