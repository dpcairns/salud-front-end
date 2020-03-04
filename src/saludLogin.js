import React, { Component } from 'react';
import request from 'superagent';
require('dotenv').config();

export default class SaludLogin extends Component {
//set state to empty user
    state = {
        usernameSignIn: '',
        usernameSignUp: '',
        passwordSignIn: '',
        passwordSignUp: '',
    }

    handleSignIn = async () => {
        const signIn = await request.post(`https://mighty-plateau-34350.herokuapp.com/auth/signin`, {
            email: this.state.usernameSignIn,
            password: this.state.passwordSignIn,
        }).set('Content-Type', 'application/x-www-form-urlencoded')

        localStorage.setItem('user', JSON.stringify(signIn.body))
        this.props.history.push('/');
    }

    handleSignUp = async () => {
        console.log(this.state.usernameSignUp);
        const signUp = await request.post(`https://mighty-plateau-34350.herokuapp.com/auth/signup`, {
            email: this.state.usernameSignUp,
            password: this.state.passwordSignUp,
        }).set('Content-Type', 'application/x-www-form-urlencoded')

        localStorage.setItem('user', JSON.stringify(signUp.body))
        this.props.history.push('/');
        ;
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <input value={ this.state.usernameSignUp} onChange={(e) => this.setState({ usernameSignUp: e.target.value})} />
                <input value={ this.state.passwordSignUp} onChange={(e) => this.setState({ passwordSignUp: e.target.value})} />

                <button onClick={ this.handleSignUp }>Sign up</button>  
                <br/>
                <input value={ this.state.usernameSignIn} onChange={(e) => this.setState({ usernameSignIn: e.target.value})} />
                <input value={ this.state.passwordSignIn} onChange={(e) => this.setState({ passwordSignIn: e.target.value})} />

                <button onClick={this.handleSignIn}>Sign in</button>     
   
                </div>
        )
    }
}