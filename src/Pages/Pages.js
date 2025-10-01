import React, { useEffect, useState, useCallback } from 'react';
import Homepage from './Homepage';
import anime from 'animejs/lib/anime.es.js';
import Skills from './Skills';
import Projects from './Projects';
import Navbar from '../Components/Navbar';
import AboutMe from "./AboutMe";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import "../styles/App.css";
import { GridProvider } from '../Contexts/GridContext';

function Pages(props) {
    const [scrollEl, setScrollElement] = useState(null);
    const [homepagePos, setHomepagePos] = useState(0);
    const [skillPos, setSkillPos] = useState(0);
    const [projectPos, setProjectPos] = useState(0);
    const [currentSection, setCurrentSection] = useState(0);
    const ref = React.useRef();

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setScrollElement(ref.current);
    }, []);

    const section = {
        "homepage": 0,
        "skills": 1,
        "projects": 2,
    }

    const scrollToTop = () => {
        const homepageSection = document.getElementById('homepage');
        if (homepageSection) {
            homepageSection.scrollIntoView({ behavior: 'auto' });
        }
    }

    useEffect(() => {
        if (homepagePos < 100) setCurrentSection(section.homepage);
        else if (projectPos > 0) setCurrentSection(section.projects);
    }, [homepagePos, projectPos]);

    useEffect(() => {
        scrollToTop();
        document.addEventListener("mouseup", handleMouseUp);
        return () => document.removeEventListener("mouseup", handleMouseUp);
    }, []);

    const handleMouseUp = () => {
        const carousel = document.getElementById("carousel");
        if (carousel) {
            carousel.dataset.mouseDownAt = "0";
            carousel.dataset.prevPercentage = carousel.dataset.percentage;
        }
    };

    const handleHomepageProgress = (progress) => setHomepagePos(progress * 100);
    const handleSkillProgress = (progress) => setSkillPos(progress * 100);
    const handleProjectProgress = (progress) => setProjectPos(progress * 100);

    return (
        <>
            <Navbar currentSection={currentSection} />
            <GridProvider>
            <ParallaxProvider scrollAxis='vertical' scrollContainer={scrollEl}>
                <div className='pageContainer' ref={ref}>
                    <Parallax onProgressChange={handleHomepageProgress} speed={100}>
                        <section id="homepage" className="h-screen w-screen"> 
                            <Homepage />
                        </section>
                    </Parallax>
                    <Parallax onProgressChange={handleSkillProgress} speed={20}>
                        <section id="skills" className="w-screen h-screen">
                            <Skills headerPos={skillPos} />
                        </section>
                    </Parallax>
                    <Parallax onProgressChange={handleProjectProgress} speed={1}>
                        <section id="projects" className="w-screen h-screen">
                            <Projects projectPos={projectPos}/>
                        </section>
                    </Parallax>
                </div>
            </ParallaxProvider>
            </GridProvider>
        </>
    );
}

export default Pages;
