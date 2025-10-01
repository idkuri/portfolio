import React from 'react';
import myLyfe from "../assets/myLyfe.png"
import "../styles/projects.css"
import mygoals from "../assets/mygoals.png"
import { useGrid } from '../Contexts/GridContext';
import { useNavigate, UseNavigate } from "react-router-dom";

function ProjectComponent(props) {
    const animation = props.animation;
    const { columns, rows, toggled, setToggled, createGrid, resizeHandler, animateTiles } = useGrid();
    const navigate = useNavigate();
    return (
        <div
        	className="project_elem"
        	onClick={() => {
        		if (animation) {
        			setToggled(!toggled);
                    setTimeout(() => {
                        window.location.href = props.project_link;   
                    }, 2000)
        		} else {
                    window.location.href = props.project_link;   
        		}
        	}}
        >
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