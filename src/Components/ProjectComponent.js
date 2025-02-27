import React from 'react';
import myLyfe from "../assets/myLyfe.png"
import "../styles/projects.css"
import mygoals from "../assets/mygoals.png"

function ProjectComponent(props) {
    const num = "01"
    return (
        <div className="project_elem" onClick={() => {window.open('https://webdev.cse.buffalo.edu/hci/teams/aquafit/', "__blank")}}>
            <h1 className="project_header" id="MyLyfe">{num}</h1>
            <img className="background" src={mygoals} alt="mygoals"></img>
            <div className="logo_wrapper">
                <img src={myLyfe} className='MyLyfe' alt='MyLyfe'></img>
            </div>
            <p className='project_description'>
                MyLyfe is a social media platform that integrates goal-setting, sharing, and achievement in a captivating and gamified experience.
            </p>
        </div>
    );
}

export default ProjectComponent;