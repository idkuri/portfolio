import {useContext, useEffect, useState } from 'react';
import "../styles/projects.css"
import ProjectComponent from '../Components/ProjectComponent';
import { SiCoursera } from 'react-icons/si';
import reversi_img from '../assets/reversi.png'
import myLyfe_img from '../assets/mygoals.png'
import snaptranslate from '../assets/snaptranslate.png'
import fundsImg from '../assets/fund_holding_analyzer.png'
import Parsight from "../assets/parsight.png"
import { GridContext } from '../Contexts/GridContext';
import logo from "../assets/icononly_transparent_nobuffer.png";

const Projects = (props) => {
    const [resized, setResized] = useState(false);
    const { columns, rows, toggled, setToggled, createGrid, resizeHandler, animateTiles } = useContext(GridContext);
    const [ parsightOverlay, setParsightOverlay ] = useState(false)

    const items = {
        0: <ProjectComponent key={"project_1"} project_name={"Othello/Reversi"} project_img={reversi_img} project_link={"https://reversi.idkuri.com"} gridAnimation={true} delay={2000}></ProjectComponent>,
        1: <ProjectComponent key={"project_2"} project_name={"Parsight"} project_img={Parsight} project_link={"https://parsight.idkuri.com/"} onClick={()=> handleParsightAnimation()} delay={2000}></ProjectComponent>,
        2: <ProjectComponent key={"project_3"} project_name={"SnapTranslate"} project_img={snaptranslate} project_link={"https://github.com/idkuri/SnapTranslate"}></ProjectComponent>,
        3: <ProjectComponent key={"project_4"} project_name={"Fund Holdings Analyzer"} project_img={fundsImg} project_link={"https://prospect.idkuri.com"}></ProjectComponent>,
    }

    useEffect(() => {
        const carousel = document.getElementById("carousel");
        const projectElemWidth = document.getElementsByClassName("project_elem")[0]?.clientWidth / 2;
        
        if (!carousel || !projectElemWidth) return;
        const maxDelta = carousel.clientWidth;
        const projectElemWidthToPercentage = (projectElemWidth / maxDelta) * 100;
    
        const initialPercentage = 50 - projectElemWidthToPercentage;
    
        carousel.style.transform = `translate(${initialPercentage}%, 0%)`;
        
        for (const image of carousel.getElementsByClassName("project_background")) {
            image.style.objectPosition = `${initialPercentage + 50}% 50%`;
        }
    
        carousel.dataset.percentage = initialPercentage;

        window.addEventListener('resize', () => {
            setResized(true);
        })

        return () => {
            window.removeEventListener('resize', () => {
                setResized(true);
            })
        }

    
      }, []);

    const handleParsightAnimation = () => {
        setParsightOverlay(!parsightOverlay)
        const navbarContainer = document.querySelector("#navbar");
        const pageContainer = document.querySelector(".pageContainer");
        const overlay = document.querySelector(".overlay");
        if (!overlay) return;
        console.log("Hello")

        overlay.scrollIntoView({ behavior: 'smooth', block: 'end' });
        // Set the radial gradient dynamically
        overlay.style.setProperty(
          "--overlayColor",
          "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.1), transparent 50%), black"
        );
    
        overlay.style.opacity = "1";
        if (navbarContainer) navbarContainer.style.display = "none";
        if (pageContainer) pageContainer.style.pointerEvents = "none";
    };

    useEffect(() => {
        const handlePageShow = (event) => {
            const overlay = document.querySelector(".overlay");
            const pageContainer = document.querySelector(".pageContainer");
            const navbarContainer = document.querySelector("#navbar");
            if (navbarContainer) navbarContainer.style.display = "flex";
            if (pageContainer) pageContainer.style.pointerEvents = "auto";
            if (overlay) {
                overlay.style.setProperty("--overlayColor", "")
                overlay.style.opacity = "0";
            };
            setParsightOverlay(false);
        };
    
        window.addEventListener("pageshow", handlePageShow);
    
        return () => window.removeEventListener("pageshow", handlePageShow);
    }, []);

    useEffect(() => {
        if (resized) {
            moveCarouselNoAnimation(props.projectPos);
            setResized(false);
        }
        else {
            moveCarousel(props.projectPos)
        }

    }, [props.projectPos])


    const moveCarouselNoAnimation = (distance) => {
        const carousel = document.getElementById("carousel");
        const project_elem_width = document.getElementsByClassName("project_elem")[0].clientWidth / 2
        const maxDelta = carousel.clientWidth;
        const project_elem_width_to_percentage = (project_elem_width / maxDelta) * 100

        const percentage = distance
        let prevPercentage = parseFloat(carousel.dataset.prevPercentage)
        if (isNaN(prevPercentage)) {
            prevPercentage = 50 - project_elem_width_to_percentage
        }
        if (prevPercentage == 0) {
            prevPercentage = 50 - project_elem_width_to_percentage
        }
        
        let nextPercentage = 50 - percentage;
        if (nextPercentage > 50 - project_elem_width_to_percentage) {
            nextPercentage = 50 - project_elem_width_to_percentage

        }
        else if (nextPercentage < -50 + project_elem_width_to_percentage) {
            nextPercentage = -50 + project_elem_width_to_percentage
        }


        for (const image of carousel.getElementsByClassName("project_background")) {
            image.style.objectPosition = `${nextPercentage + 50}% 50%`;
        }
        carousel.dataset.prevPercentage = nextPercentage;
        carousel.dataset.percentage = nextPercentage;
        carousel.style.transform = `translate(${nextPercentage}%, 0%)`;
    }
      


    const moveCarousel = (distance) => {
        const carousel = document.getElementById("carousel");
        const project_elem_width = document.getElementsByClassName("project_elem")[0].clientWidth / 2
        const maxDelta = carousel.clientWidth;
        const project_elem_width_to_percentage = (project_elem_width / maxDelta) * 100

        const percentage = distance
        let prevPercentage = parseFloat(carousel.dataset.prevPercentage)
        if (isNaN(prevPercentage)) {
            prevPercentage = 50 - project_elem_width_to_percentage
        }
        if (prevPercentage == 0) {
            prevPercentage = 50 - project_elem_width_to_percentage
        }
        
        let nextPercentage = 50 - percentage;
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
        carousel.dataset.prevPercentage = nextPercentage;
        carousel.dataset.percentage = nextPercentage;
        carousel.animate( {
            transform: `translate(${nextPercentage}%, 0%)`
        }, {duration: 1200, fill: "forwards"})
    }


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

    const handleTouchStart = (e) => {
        const carousel = document.getElementById("carousel");
        carousel.dataset.mouseDownAt = e.touches[0].clientX
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
        const maxDelta = carousel.clientWidth;
        const project_elem_width_to_percentage = (project_elem_width / maxDelta) * 100

        const percentage = -((mouseDelta / maxDelta) * 100);
        let prevPercentage = parseFloat(carousel.dataset.prevPercentage)
        // console.log(prevPercentage)
        if (isNaN(prevPercentage)) {
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

    const handleTouchMove = (e) => {
        const carousel = document.getElementById("carousel");
        const project_elem_width = document.getElementsByClassName("project_elem")[0].clientWidth / 2
        if (carousel.dataset.mouseDownAt == "0") return;
        const mouseDelta = parseFloat(carousel.dataset.mouseDownAt) - e.touches[0].clientX;
        const maxDelta = carousel.clientWidth;
        const project_elem_width_to_percentage = (project_elem_width / maxDelta) * 100

        const percentage = -((mouseDelta / maxDelta) * 100);
        let prevPercentage = parseFloat(carousel.dataset.prevPercentage)
        // console.log(prevPercentage)
        if (isNaN(prevPercentage)) {
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
        <div className='projects_page' 
            // onTouchMove={(e) => {handleTouchMove(e)}} 
            // onTouchStart={(e) =>{handleTouchStart(e)}} 
            // onTouchEnd={(e) => {handleMouseUp(e)}}
            onMouseMove={(e) => handleMouseMove(e)} 
            onMouseDown={(e) => {handleMouseDown(e)}} 
            onMouseUp={(e) => {handleMouseUp(e)}}>
            <h1 className='p_header'>
                {`<Projects/>`}
            </h1>
            {createGrid(columns * rows)}
            <div className='overlay'></div>
            {parsightOverlay && (
                <>
                    <div className="
                        absolute 
                        flex
                        items-center
                        justify-center
                        inset-0 
                        z-[1100] 
                        pointer-events-none 
                        bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)] 
                        bg-[size:50px_50px]
                        overflow-hidden
                        fade-in" 
                    >
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="w-60 h-60 md:w-75 md:h-75 animate-pulse fade-in"
                        style={{ filter: "drop-shadow(0 0 40px hsl(187 100% 50% / 0.3))" }}
                    />
                    </div>
                </>
            )}
            <div className='carousel' id="carousel" data-mouse-down-at="0" data-prev-percentage={props.projectPos}>
                {renderProjects()}
            </div>
        </div>
    );
};

export default Projects;