import React, { useEffect, useState, useLayoutEffect } from 'react';
import Homepage from './Homepage';
import Skills from './Skills';
import Projects from './Projects';
import Navbar from '../Components/Navbar';
import AboutMe from "./AboutMe"
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import background from "../assets/background.png"
import {ImSpinner8} from "react-icons/im"
import "../styles/App.css"

function Pages(props) {
    
    const [scrollEl, setScrollElement] = useState(null);
    const [homepagePos, setHomepagePos] = useState(0);
    const [skillPos, setSkillPos] = useState(0);
    const [projectPos, setProjectPos] = useState(0);
    const [currentSection, setCurrentSection] = useState(0);
    const ref = React.useRef();

    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setScrollElement(ref.current)
        // setTimeout(() => {
        //     // console.log("2 seconds have passed");   
        //     setLoading(false);
        // }, 2000)
    })

    const section = {
        "homepage": 0,
        "skills": 1,
        "projects": 2,
    }


    const scrollToTop = () => {
        const homepageSection = document.getElementById('homepage');
        if (homepageSection) {
            homepageSection.scrollIntoView({
            behavior: 'auto',
            })
        };
    }

    useEffect(() => {
        if (homepagePos < 100) {
            setCurrentSection(section.homepage);
        }
        else if (projectPos > 0) {
            setCurrentSection(section.projects);
        }

    }, [homepagePos, skillPos, projectPos])



    useEffect(() => {
        scrollToTop();
        document.addEventListener("mouseup", handleMouseUp);
    
        return () => {
          document.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);


    const handleMouseUp = () => {
        const carousel = document.getElementById("carousel");
        carousel.dataset.mouseDownAt = "0";
        carousel.dataset.prevPercentage = carousel.dataset.percentage;
    };

    function handleHomepageProgress(progress) {
        // console.log(progress)
        setHomepagePos(progress * 100);
    }

    function handleSkillProgress(progress) {
        setSkillPos(progress * 100);
    }
    function handleProjectProgress(progress) {
        // console.log(progress)
        setProjectPos(progress * 100);
    }
        return (
            <>
            <Navbar currentSection={currentSection}/>
            {/* <div className='loading_cover' style = {{height: `${isLoading ? "100%": "0%"}`}}><p className='loading_font'>{loadingStr}</p></div> */}
            <ParallaxProvider scrollAxis='vertical' scrollContainer={scrollEl}>
                <div className='pageContainer' ref={ref}>
                    <Parallax onProgressChange={(e) => handleHomepageProgress(e)} speed={100}>
                        <section id="homepage" className="h-screen w-screen">
                                <Homepage/>
                        </section>
                    </Parallax>
                    <Parallax onProgressChange={(e) => handleSkillProgress(e)} speed={20}>
                        <section id="skills" className="w-screen h-screen">
                                <Skills headerPos={skillPos}/>
                        </section>
                    </Parallax>
                    <Parallax onProgressChange={(e) => handleProjectProgress(e)} speed={1}>
                        <section id="projects" className="w-screen h-screen">
                                <Projects projectPos={projectPos}/>
                        </section>
                    </Parallax>
                    {/* <Parallax onProgressChange={(e) => abouthandleProgress(e)} speed={0.5}>
                        <section className="w-screen h-screen" id="aboutme">
                            <AboutMe headerPos={aboutPos}></AboutMe>
                        </section>
                    </Parallax> */}
                </div>      
            </ParallaxProvider>    
            </>                                                                                                                  
          );
          

}

export default Pages;