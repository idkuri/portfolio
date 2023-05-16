import React, { useEffect, useState } from 'react';
import Homepage from './Homepage';
import Skills from './Skills';
import Projects from './Projects';
import Contacts from './Contacts';
import Navbar from '../Components/Navbar';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import "../App.css"

function Pages(props) {
    const [scrollEl, setScrollElement] = useState(null);
    const [skillPos, setSkillPos] = useState(0)
    const ref = React.useRef();

    useEffect(() => {
        setScrollElement(ref.current)
    })

    function handleProgress(progress) {
        const newLeftPosition = progress * 100
        setSkillPos(newLeftPosition);
    }

  return (
    <ParallaxProvider scrollAxis='vertical' scrollContainer={scrollEl}>
        <div className='pageContainer' ref={ref}>
            <Parallax onExit={() => {console.log("You have exited")}}speed={1}>
                <section className="w-screen h-screen" id="homepage">
                        <Homepage></Homepage>
                </section>
            </Parallax>
            <Parallax onProgressChange={(e) => handleProgress(e)} speed={1}>
                <section className="w-screen h-screen" id="skills">
                        <Skills headerPos={skillPos}></Skills>
                </section>
            </Parallax>
            <Parallax speed={0.5}>
                <section className="w-screen h-screen" id="projects">
                    <Projects></Projects>
                </section>
            </Parallax>
            <Parallax speed={0.5}>
                <section className="w-screen h-screen" id="contacts">
                    <Contacts></Contacts>
                </section>
            </Parallax>
        </div>      
    </ParallaxProvider>                                                                                                                      
  );
}

export default Pages;