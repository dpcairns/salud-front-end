import React, { Component } from 'react';
import request from 'superagent';
//import { Link } from 'react-router-dom';
import CocktailItem from './CocktailItem';




export default class TequilaList extends Component {
    state = {
        id: [],
        cocktail:[]
    }
    async componentDidMount() {

        const user = JSON.parse(localStorage.getItem('user'))
        const getTequilaList = () => request.get(`https://mighty-plateau-34350.herokuapp.com/tequila`)
            .set('Authorization', user.token);
            
    const data = await getTequilaList()
    console.log(data.body)
    this.setState({
        cocktail: data.body
    })
}

    render() {
        return (
            <div>
                <h2>Tequila Cocktails for fun and pleasure</h2>
                <ul className='tequila-list'>
                {
                        this.state.cocktail.map(cocktail => (
                            <div key={cocktail.id} to={`/id/${cocktail.id}`} onClick={()=> this.props.history.push(`/id/${cocktail.id}`)}> 
                    
                            <CocktailItem cocktail={cocktail}/>
                            </div>
                        )
                        )   
                        }
                </ul>
            </div>
        )
    }
}