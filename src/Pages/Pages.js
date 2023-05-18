import React, { useEffect, useState } from 'react';
import Homepage from './Homepage';
import Skills from './Skills';
import MyLyfe from './projects/MyLyfe';
import TeamChess from './projects/TeamChess';
import Contacts from './Contacts';
import Navbar from '../Components/Navbar';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import background from "../assets/background.png"
import "../App.css"

function Pages(props) {
    
    const [scrollEl, setScrollElement] = useState(null);
    const [skillPos, setSkillPos] = useState(0)
    const ref = React.useRef();

    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setScrollElement(ref.current)
        setTimeout(() => {
            // console.log("2 seconds have passed");   
            setLoading(false);
        }, 3000)
    })
    
    const loadingStr = "<Loading/>..."

    function handleProgress(progress) {
        const newLeftPosition = progress * 100
        setSkillPos(newLeftPosition);
    }
        return (
            <>
            {/* <div className='loading_cover' style = {{height: `${isLoading ? "100%": "0%"}`}}>{loadingStr}</div> */}
            <ParallaxProvider scrollAxis='vertical' scrollContainer={scrollEl}>
                <div className='pageContainer' ref={ref}>
                    <Parallax onExit={() => {console.log("You have exited")}}speed={1}>
                        <section className="relative h-screen w-screen" id="homepage">
                                <Homepage></Homepage>
                        </section>
                    </Parallax>
                    <Parallax speed={0.5}>
                        <section className="w-screen h-screen outline-dashed outline-red-500 outline-0" id="projects">
                            <MyLyfe></MyLyfe>
                        </section>
                    </Parallax>
                    <Parallax speed={0.5}>
                        <section className="w-screen h-screen outline-dashed outline-blue-500 outline-0" id="projects">
                            <TeamChess></TeamChess>
                        </section>
                    </Parallax>
                    <Parallax onProgressChange={(e) => handleProgress(e)} speed={1}>
                        <section className="w-screen h-screen" id="skills">
                                <Skills headerPos={skillPos}></Skills>
                        </section>
                    </Parallax>
                    <Parallax speed={0.5}>
                        <section className="w-screen h-screen" id="contacts">
                            <Contacts></Contacts>
                        </section>
                    </Parallax>
                </div>      
            </ParallaxProvider>    
            </>                                                                                                                  
          );
          

}

export default Pages;