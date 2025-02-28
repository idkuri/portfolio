import React from 'react';
import myLyfe from "../assets/myLyfe.png"
import "../styles/projects.css"
import mygoals from "../assets/mygoals.png"

function ProjectComponent(props) {
    return (
        <div className="project_elem" onClick={() => {window.open(`${props.project_link}`, "__blank")}}>
            {/* <h1 className="project_header" id="MyLyfe">{num}</h1> */}
            <img className="project_background" src={props.project_img} alt={props.project_name} draggable={false}></img>
            {/* <div className="logo_wrapper">
                <img src={myLyfe} className='MyLyfe' alt='MyLyfe' draggable={false}></img>
            </div> */}
            {/* <p className='project_description'>
                MyLyfe is a social media platform that integrates goal-setting, sharing, and achievement in a captivating and gamified experience.
            </p> */}
        </div>
    );
}

export default ProjectComponent;