import React from 'react';
import Project from './Project';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out my projects below!</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <Project 
                        src="../../public/images/empDir.png"
                        text="Employee Directory"
                        label="React.js" 
                        path="https://github.com/bcourtney1029/react-employee-directory"
                        />
                        <Project 
                        src="../../public/images/delcalc.png"
                        text="Delivery Calculator"
                        label="JS/HTML/CSS" 
                        path="https://github.com/ianjameswilson/Delivery-Calculator"
                        />
                        <Project 
                        src="../../public/images/fitTrack.png"
                        text="Fitness Tracker"
                        label="JS/HTML/CSS" 
                        path="https://github.com/bcourtney1029/fitnessTracker"
                        />
                    </ul>
                    <ul className="cards-items">
                        <Project 
                        src="images/notetaker.png"
                        text="Note Taker"
                        label="JS/HTML/CSS" 
                        path="https://github.com/bcourtney1029/Note-taker"
                        />
                        <Project 
                        src="images/readme.png"
                        text="README.md Generator"
                        label="JS" 
                        path="https://github.com/bcourtney1029/ReadmeGenerator"
                        />
                        <Project 
                        src="images/templateengine.png"
                        text="CLI Template Engine"
                        label="JS/HTML" 
                        path="https://github.com/bcourtney1029/CLI-Template-Engine"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
