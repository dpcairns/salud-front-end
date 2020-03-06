import React, { Component } from 'react'
import '../drinkID.css';
export default class DrinkId extends Component {
    render() {
       
        const { cocktail } = this.props;
       
        return (
          
            <div className='drink-name'>
                  <h2>{cocktail.Name}</h2>

                  <img className='detail-image' src ={cocktail.Image} alt=""/>

               

        
                         <p className='ing-ptag'>Ingredients: </p>
          
                 <ul className='ing'>
                      <li className='ing-li'> 

                      {cocktail.Ingredients[0] + ' ' + cocktail.Measurement[0]}
                      </li>  
                      <li>
                      {cocktail.Ingredients[0] + ' ' + cocktail.Measurement[0]}
                      </li> 
                      <li>
                      {cocktail.Ingredients[0] + ' ' + cocktail.Measurement[0]}
                      </li> 
                      <li>
                      {cocktail.Ingredients[0] + ' ' + cocktail.Measurement[0]}
                      </li> 
                      <li>
                      {cocktail.Ingredients[0] + ' ' + cocktail.Measurement[0]}
                      </li> 
                      <li>
                      {cocktail.Ingredients[0] + ' ' + cocktail.Measurement[0]}
                      </li> 
                      <li>
                      {cocktail.Ingredients[0] + ' ' + cocktail.Measurement[0]}
                      </li> 
                    </ul>
                    <p className='instructions-ptag'>How to make your tasty drink:</p>
                    <p className='instructions'>
                      {cocktail.Instructions}
                     </p>
            
             
          </div>
          
        )
    }
}