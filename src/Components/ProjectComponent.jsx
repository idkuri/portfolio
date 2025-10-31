import React from 'react';
import myLyfe from "../assets/myLyfe.png"
import "../styles/projects.css"
import mygoals from "../assets/mygoals.png"
import { useGrid } from '../Contexts/GridContext';
import { useNavigate } from "react-router-dom";

function ProjectComponent(props) {
    const animation = props.gridAnimation;
    const { columns, rows, toggled, setToggled, createGrid, resizeHandler, animateTiles } = useGrid();
    const navigate = useNavigate();

    const handleClick = () => {
        // Run the passed-in handler if it exists
        if (props.onClick) props.onClick();

        // Run existing animation logic
        if (animation) {
            setToggled(!toggled);
        }
        if (props.delay && props.delay != 0) {
            setTimeout(() => {
                window.location.href = props.project_link;
            }, props.delay);
        } else{
                 window.location.href = props.project_link;
        }
    }

    return (
        <div
        	className="project_elem"
        	onClick={handleClick}
        >
            <img className="project_background" src={props.project_img} alt={props.project_name} draggable={false}></img>
        </div>
    );
}

export default ProjectComponent;