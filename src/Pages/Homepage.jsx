import React, { useEffect, useState, useContext, useRef } from 'react';
import "../styles/homepage.css"
import Typewriter from 'typewriter-effect';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi"
import { CursorContext } from '../Contexts/CursorContext';
import DragHintCarousel from '../Components/SwipeIndicator';

function Homepage(props) {
    const { mouseHover, setMouseHover } = useContext(CursorContext);
    const myName = "<Andrew/>"
    const [hoveredIndex, setHoveredIndex] = useState(new Set());
    const hoverTimeouts = useRef(new Map());
    const [isMobile, setIsMobile] = useState(false);
    const [hoveredOnce, setHoveredOnce] = useState(false);

    
    useEffect(() => {
        const wrapper = document.getElementById("home-wrapper");
        wrapper.style.pointerEvents = "none"
        const tid = setTimeout(() => {
            wrapper.style.pointerEvents = "auto"
        }, 2000)

        return () => clearTimeout(tid);
    }, [])

    useEffect(() => {
        function checkMobile() {
            if (window.innerWidth <= 500) {
                setIsMobile(true)
            }
            else {
                setIsMobile(false);
            }
        }

        checkMobile();

        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);


    const handleMouseEnter = (index) => {
        // Cancel any pending timeout for this index
        setMouseHover(true);
        setHoveredOnce(true);
        if (hoverTimeouts.current.has(index)) {
            clearTimeout(hoverTimeouts.current.get(index));
            hoverTimeouts.current.delete(index);
        }

        setHoveredIndex(prevSet => {
            const newSet = new Set(prevSet);
            newSet.add(index);
            return newSet;
        });
    };

    // Handle mouse leaving a character
    const handleMouseLeave = (index) => {
        setMouseHover(false);
        const id = setTimeout(() => {
            setHoveredIndex(prevSet => {
                const newSet = new Set(prevSet);
                newSet.delete(index);
                return newSet;
            });
            hoverTimeouts.current.delete(index);
        }, 1000); // delay before reverting

        hoverTimeouts.current.set(index, id);
    };

    const renderName = (name) => {
        return name.split("").map((char, index) => (
            <span
                key={`me-${index}`}
                className='name hover:px-10'
                style={{
                    fontFamily: hoveredIndex.has(index) ? "'Chewy', serif" : 'Poppins, serif',
                    transform: hoveredIndex.has(index) ? 'scale(1.5)' : 'scale(1)',
                    transition: 'all 0.75s ease',
                    display: 'inline-block',
                    letterSpacing: hoveredIndex.has(index) ? '20px' : '0px',
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
            >
                {char}
            </span>
        ));
    };

    return (
        <div id="home-wrapper" className="home-wrapper">
            <h1 className='name' id="intro">Hi, I'm</h1>
            <div className="flex justify-center item-center w-full transition-all 0.5s">
                <h1 className='name' id="me">
                    {!isMobile && !hoveredOnce &&
                        <DragHintCarousel/>
                    }
                    {renderName(myName)}
                </h1>
            </div>
            <Typewriter className="typewriter"
                options={{
                    strings: ["Fullstack Developer"],
                    autoStart: true,
                    loop: true,
                    skipAddStyles: true,
                    pauseFor: 2000,
                    deleteSpeed: 200,
                }}
            />
            <div className='social_wrapper'>
                <FaLinkedinIn className='relative w-full h-full text-white hover:text-blue-500 cursor-pointer' onClick={ ()=> window.open('https://www.linkedin.com/in/acao5/', '_blank')}></FaLinkedinIn>
                <FaGithub className='relative w-full h-full text-white hover:text-gray-500 cursor-pointer' onClick={()=> window.open('https://github.com/idkuri', '_blank')}></FaGithub>
                <FiMail className='relative w-full h-full text-white hover:text-red-500 cursor-pointer' onClick={()=> window.location.href='mailto:acaoy2@gmail.com'}></FiMail>
            </div>

            
        </div>
    );
}

export default Homepage;