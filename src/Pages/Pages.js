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
    const [skillPos, setSkillPos] = useState(0);
    const [aboutPos, setAboutPos] = useState(0);
    const ref = React.useRef();

    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setScrollElement(ref.current)
        setTimeout(() => {
            // console.log("2 seconds have passed");   
            setLoading(false);
        }, 2000)
    })
    
    const loadingStr = "Hi there!  ( • ᴗ - ) ✧"

    function handleProgress(progress) {
        const newLeftPosition = progress * 100
        setSkillPos(newLeftPosition);
    }
    function abouthandleProgress(progress) {
        const newLeftPosition = progress * 100
        setAboutPos(newLeftPosition);
    }
        return (
            <>
            {/* <div className='loading_cover' style = {{height: `${isLoading ? "100%": "0%"}`}}><p className='loading_font'>{loadingStr}</p></div> */}
            <ParallaxProvider scrollAxis='vertical' scrollContainer={scrollEl} scrollToTopOnMount>
                <div className='pageContainer' ref={ref}>
                    <Parallax speed={100}>
                        <section className="relative h-screen w-screen" id="homepage">
                                <Homepage></Homepage>
                        </section>
                    </Parallax>
                    <Parallax onProgressChange={(e) => handleProgress(e)} speed={20}>
                        <section className="w-screen h-screen" id="skills">
                                <Skills headerPos={skillPos}></Skills>
                        </section>
                    </Parallax>
                    <Parallax speed={1}>
                        <section className="w-screen h-screen outline outline-2 outline-blue-500 outline-offset-4" id="projects">
                                <Projects></Projects>
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