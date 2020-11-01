import React from 'react'
import { Button } from './Button';
import './Hero.css';
import '../App.css';
import './Button.css';

function Hero() {
    return (
        <div className="hero-container">
            <video src="/videos/backgroundvid.mp4" autoPlay loop muted />
            <h1>Bryan Courtney's Portfolio</h1>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn-outline" buttonSize="btn-large" path="/contact">
                    Contact me <i className='fas fa-address-book'/>
                </Button>
                <Button className="btns" buttonStyle="btn-primary" buttonSize="btn-large" path="/resume">
                    My Resume <i className='fas fa-file'/>
                </Button>
            </div>
        </div>
    )
}

export default Hero
