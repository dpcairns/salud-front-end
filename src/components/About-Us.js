import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import bCImage from '../assets/background.png';
import rexImg from '../assets/rex.jpeg';
import suriImg from '../assets/suri.png';
import dorjeImg from '../assets/dorje.JPG';
import anastasiaImg from '../assets/anastasia.png';
import '../AboutUs.css';

export default class AboutUs extends Component {
    render () {
        return (
<section>

            <div className='container'>
                <h1 className='heading'> Our Team</h1>
            <div className='card-wrapper'>
                <div className='card'>
                    <img className='background' src={bCImage} alt=''/>
                    <img className='profile-img' src={rexImg} alt=''/>
                    <h1> Rex Bergeron</h1>
                    <p className='job-title'>Software Developer</p>
                    <p className='about'> Favorite Cocktail: 69 special </p>
                    <p className='contact'>Contact</p>
                </div>
                <div className='card'>
                    <img className='background' src={bCImage} alt=''/>
                    <img className='profile-img' src={suriImg} alt=''/>
                    <h1> Surelis Segarra</h1>
                    <p className='job-title'>Software Developer</p>
                    <p className='about'> Favorite Cocktail: Gin and Tonic </p>
                    <p className='contact'>Contact</p>
                </div>  <div className='card'>
                    <img className='background' src={bCImage} alt=''/>
                    <img className='profile-img' src={dorjeImg} alt=''/>
                    <h1> Dorje Kirsten </h1>
                    <p className='job-title'>Software Developer</p>
                    <p className='about'> Favorite Cocktail: The Vesper Royale </p>
                    <p className='contact'>Contact</p>
                </div>
                <div className='card'>
                    <img className='background' src={bCImage} alt=''/>
                    <img className='profile-img' src={anastasiaImg} alt=''/>
                    <h1> Anastasia Morozova</h1>
                    <p className='job-title'>Software Developer</p>
                    <p className='about'> Favorite Cocktail: Mezcal Margarita </p>
                    <p className='contact'>Contact</p>
                </div>
            </div>
            </div>
</section>
        );
    }
}