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
      try {
        const signIn = await request.post(`https://mighty-plateau-34350.herokuapp.com/auth/signin`, {
            email: this.state.usernameSignIn,
            password: this.state.passwordSignIn,
        }).set('Content-Type', 'application/x-www-form-urlencoded')

        localStorage.setItem('user', JSON.stringify(signIn.body))
        this.props.history.push('/');

      } catch (e) {
        console.log(e);
      } 
    }

    handleSignUp = async () => {
        console.log(this.state.usernameSignUp);
        const signUp = await request.post(`https://mighty-plateau-34350.herokuapp.com/auth/signup`, {
            email: this.state.usernameSignUp,
            password: this.state.passwordSignUp,
        }).set('Content-Type', 'application/x-www-form-urlencoded')

        localStorage.setItem('user', JSON.stringify(signUp.body))
        this.props.history.push('/');
    }

    render() {
        console.log(this.state);
        return (
            <div className='login-box'>
                <div className='textbox'>
                    <input 
                        className='sign-up' 
                        placeholder='email' 
                        value={ this.state.usernameSignUp} 
                        onChange={(e) => this.setState({ usernameSignUp: e.target.value})} />
                    <input 
                        className='sign-up-pass'
                        placeholder='password'
                        value={ this.state.passwordSignUp}
                        onChange={(e) => this.setState({ passwordSignUp: e.target.value})} />
                    <button 
                        className='btn'
                        onClick={ this.handleSignUp }>Sign up</button>  
                    <br/>
                    <input className='sign-in'
                        placeholder='email'
                        value={ this.state.usernameSignIn}
                        onChange={(e) => this.setState({ usernameSignIn: e.target.value})} />
                    <input className='sign-in-pass'
                        placeholder='password'
                        value={ this.state.passwordSignIn}
                        onChange={(e) => this.setState({ passwordSignIn: e.target.value})} />
                    <button className='btn'
                    onClick={this.handleSignIn}>Sign in</button>     
                </div>
            </div>
        )
    }
}