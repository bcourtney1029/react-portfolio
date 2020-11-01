import React from 'react';


function Project(props) {
    return (
        <div className="project-container">
            <li className="project-item">
                <a target="_blank" rel="noreferrer" href={props.path}>
                    <figure className="project-item-wrap" data-category={props.label}>
                        <img className="project-item-img" src={props.src} alt="Project"/>
                    </figure>
                    <div className="project-item-info">
                        <h4 className="project-item-text">{props.text}</h4>
                    </div>
                </a>
                    
                
            </li>
        </div>
    )
}

export default Project
