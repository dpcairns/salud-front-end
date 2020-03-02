import React, { Component } from 'react';
import request from 'superagent';
import { Link } from 'react-router-dom';

const getVodkaList = () => request.get(`https://mighty-plateau-34350.herokuapp.com/vodka`);



export default class VodkaList extends Component {
    state = {
        id: [],
    }
async componentDidMount() {
    const data = await getVodkaList()
    this.setState({
        id: data.body.drinks
    })
}

    render() {
        return (
            <div>
                <h2>Vodka Cocktails for fun and pleasure</h2>
            </div>
        )
    }
}