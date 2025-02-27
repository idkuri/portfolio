import {useEffect, useState} from 'react';
import "../styles/projects.css"
import ProjectComponent from '../Components/ProjectComponent';
import { SiCoursera } from 'react-icons/si';

const Projects = () => {
    const [selector, setSelector] = useState(0);
    const items = {
        0: <ProjectComponent key={0}></ProjectComponent>,
        1: <ProjectComponent key={1}></ProjectComponent>,
        2: <ProjectComponent key={2}></ProjectComponent>,
        3: <ProjectComponent key={3}></ProjectComponent>,
        4: <ProjectComponent key={4}></ProjectComponent>,
        5: <ProjectComponent key={5}></ProjectComponent>,
        6: <ProjectComponent key={6}></ProjectComponent>,
        9: <ProjectComponent key={9}></ProjectComponent>,
        7: <ProjectComponent key={7}></ProjectComponent>,
        8: <ProjectComponent key={8}></ProjectComponent>,
        10: <ProjectComponent key={10}></ProjectComponent>,
    }

    useEffect(() => {
        let carousel = document.getElementsByClassName("carousel")
        let project_elem = document.getElementsByClassName("project_elem")
        console.log(carousel[0])
        if (carousel && project_elem) {
            const item_length = Object.keys(items).length
            carousel[0].style.width = `${(item_length+1) * (project_elem[0].clientWidth)}px`
        }
    }, [])

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
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }

    const handleMouseUp = (e) => {
        const carousel = document.getElementById("carousel");
        carousel.dataset.mouseDownAt = "0";
        carousel.dataset.prevPercentage = carousel.dataset.percentage;
    }
    
    

    const handleMouseMove = (e) => {
        const carousel = document.getElementById("carousel");
        if (carousel.dataset.mouseDownAt == "0") return;
        const mouseDelta = parseFloat(carousel.dataset.mouseDownAt) - e.clientX;
        const maxDelta = window.innerWidth / 2;

        const percentage = ((mouseDelta / maxDelta) * 100);
        const nextPercentage = percentage + parseFloat(carousel.dataset.prevPercentage);
        let calculateMargin = 50 - nextPercentage
        if (calculateMargin <= -100) {
            calculateMargin = -100

        }
        else if (calculateMargin >= 50) {
            calculateMargin = 50
        }
        carousel.dataset.percentage = nextPercentage;
        carousel.style.marginLeft = `${calculateMargin}%`;

    }


    return (
        <div className='flex w-screen h-screen flex-col gap-20 outline outline-2 outline-blue-500 outline-offset-4' onMouseDown={(e) => {handleMouseDown(e)}} onMouseUp={(e) => {handleMouseUp(e)}}>
            <h1 className='p_header flex-row gap-20 outline outline-2 outline-blue-500 outline-offset-4'>{`<Projects>`}</h1>
            <div className='carousel outline outline-2 outline-red-500 outline-offset-4' id="carousel" data-mouse-down-at="0" data-prev-percentage="0">
                {renderProjects()}
            </div>
        </div>
    );
};

export default Projects;