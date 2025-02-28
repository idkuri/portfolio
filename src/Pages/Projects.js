import {useEffect, useState} from 'react';
import "../styles/projects.css"
import ProjectComponent from '../Components/ProjectComponent';
import { SiCoursera } from 'react-icons/si';
import { configure } from '@testing-library/react';
import reversi_img from '../assets/reversi.png'
import myLyfe_img from '../assets/mygoals.png'
import snaptranslate from '../assets/snaptranslate.png'

const Projects = () => {
    const [selector, setSelector] = useState(0);

    const items = {
        0: <ProjectComponent key={0} project_name={"Othello/Reversi"} project_img={reversi_img} project_link={"https://reversiproject.netlify.app/"}></ProjectComponent>,
        1: <ProjectComponent key={1} project_name={"MyLyfe"} project_img={myLyfe_img} project_link={"https://webdev.cse.buffalo.edu/hci/teams/aquafit"}></ProjectComponent>,
        2: <ProjectComponent key={2} project_name={"SnapTranslate"} project_img={snaptranslate} project_link={"https://github.com/idkuri/SnapTranslate"}></ProjectComponent>,
    }

    useEffect(() => {
        // Get the carousel and project element width
        const carousel = document.getElementById("carousel");
        const projectElemWidth = document.getElementsByClassName("project_elem")[0]?.clientWidth / 2;
        
        if (!carousel || !projectElemWidth) return;
        const maxDelta = 1.25 * window.innerWidth;
        const projectElemWidthToPercentage = (projectElemWidth / maxDelta) * 100;
    
        const initialPercentage = 50 - projectElemWidthToPercentage;
    
        carousel.style.transform = `translate(${initialPercentage}%, 0%)`;
        
        for (const image of carousel.getElementsByClassName("project_background")) {
            image.style.objectPosition = `${initialPercentage + 50}% 50%`;
        }
    
        carousel.dataset.percentage = initialPercentage;

    
      }, []);


    const renderProjects = () => {
        let project_array = []
        for (let key in items) {
            project_array.push(items[key])
        }
        return project_array
    }

    const handleMouseDown = (e) => {
        const carousel = document.getElementById("carousel");
        carousel.dataset.mouseDownAt = e.clientX
    }

    const handleMouseUp = (e) => {
        const carousel = document.getElementById("carousel");
        carousel.dataset.mouseDownAt = "0";
        carousel.dataset.prevPercentage = carousel.dataset.percentage;
    }
    
    

    const handleMouseMove = (e) => {
        const carousel = document.getElementById("carousel");
        const project_elem_width = document.getElementsByClassName("project_elem")[0].clientWidth / 2
        if (carousel.dataset.mouseDownAt == "0") return;
        const mouseDelta = parseFloat(carousel.dataset.mouseDownAt) - e.clientX;
        const maxDelta = 1.25 * window.innerWidth;
        const project_elem_width_to_percentage = (project_elem_width / maxDelta) * 100

        const percentage = -((mouseDelta / maxDelta) * 100);
        let prevPercentage = parseFloat(carousel.dataset.prevPercentage)
        if (isNaN(prevPercentage)) {
            prevPercentage = 50 - project_elem_width_to_percentage
        }
        if (prevPercentage == 0) {
            prevPercentage = 50 - project_elem_width_to_percentage
        }
        
        let nextPercentage = percentage + prevPercentage;
        if (nextPercentage > 50 - project_elem_width_to_percentage) {
            nextPercentage = 50 - project_elem_width_to_percentage

        }
        else if (nextPercentage < -50 + project_elem_width_to_percentage) {
            nextPercentage = -50 + project_elem_width_to_percentage
        }

        for (const image of carousel.getElementsByClassName("project_background")) {
            image.animate({
                objectPosition: `${nextPercentage + 50}% 50%`
            }, {duration: 1200, fill: "forwards"})
        }
        // console.log(calculateMargin)
        carousel.dataset.percentage = nextPercentage;
        carousel.animate( {
            transform: `translate(${nextPercentage}%, 0%)`
        }, {duration: 1200, fill: "forwards"})
        // console.log(nextPercentage)
    }


    return (
        <div className='projects_page' onMouseMove={(e) => handleMouseMove(e)}onMouseDown={(e) => {handleMouseDown(e)}} onMouseUp={(e) => {handleMouseUp(e)}}>
            <h1 className='p_header'>
                {`<Projects/>`}
            </h1>
            <div className='carousel' id="carousel" data-mouse-down-at="0" data-prev-percentage="0">
                {renderProjects()}
            </div>
        </div>
    );
};

export default Projects;