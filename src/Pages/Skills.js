import React from 'react';
import '../skills.css'
import {FaReact, FaJsSquare, FaPython, FaHtml5, FaCss3Alt, FaJava, FaPhp} from "react-icons/fa"
import {SiTailwindcss} from "react-icons/si"
import {IoLogoNodejs} from "react-icons/io"

function Skills(props) {
    // console.log(props.headerPos)
    const str = "I speak:"
    const transformValue = `translateX(${1.25 * (props.headerPos) / 2}vw)`;
    
    return (
    <div className="skills-wrapper">
                <h1 className="skills-header" style={{ transform: transformValue }}>
                    {str}
                </h1>
            <div className='technologies'>
                <div className='cover' style = {{width: `${props.headerPos >= 40 ? "0%": "110vw"}`}}></div>
                <div className="icon">
                    <FaReact className='react'>ReactJS</FaReact>
                </div>
                <div className='icon'>
                    <FaJsSquare className='js'>Javascript</FaJsSquare>
                </div>
                <div className="icon">
                    <FaCss3Alt className='css3'>CSS3</FaCss3Alt>
                </div>
                <div className='icon'>
                    <SiTailwindcss className='tailwind'>TailwindCSS</SiTailwindcss>
                </div>
                <div className='icon'>
                    <IoLogoNodejs className='nodejs'>NodeJS</IoLogoNodejs>
                </div>
                <div className='icon'>
                    <FaHtml5 className='html5'>HTML5</FaHtml5>
                </div>
                <div className='icon'>
                    <FaPython className='python'>Python</FaPython>
                </div>
                <div className='icon'>
                    <FaJava className='java'>Java</FaJava>
                </div>
                <div className='icon'>
                    <FaPhp className='php'>PHP</FaPhp>
                </div>
            </div>
            {props.headerPos >= 40 ? (<button className="resume" onClick={() => {window.open("https://drive.google.com/file/d/1TiuqYuiBiD6HX0kNNnUoDahcNnhW42We/view", '_blank');}}>
                Resume
            </button>): (<></>)}
    </div>
    );
}

export default Skills;