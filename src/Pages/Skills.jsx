import React, { useContext, useState } from 'react';
import '../styles/skills.css'
import {FaReact, FaJsSquare, FaPython, FaHtml5, FaCss3Alt, FaJava, FaPhp} from "react-icons/fa"
import {SiTailwindcss} from "react-icons/si"
import {IoLogoNodejs} from "react-icons/io"
import { CursorContext } from '../Contexts/CursorContext';
const PythonIcon = ({ className, hovering }) => {
    
    const blueColor = hovering ? "#3776AB" : "#ffffff";
    const yellowColor = hovering ? "#FFD43B" : "#ffffff";
    return (
        <svg 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                {/* Blue snake (top-left) */}
                <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" 
                    fill={blueColor}
                    className="python-blue"
                />
                
                {/* Yellow snake (bottom-right) */}
                <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" 
                    fill={yellowColor}
                    className="python-yellow"
                />
            </g>
        </svg>
    )
}


const SkillIcon = ({ Icon, IconProps, name }) => {
    const { mouseHover, setMouseHover, setHoverType } = useContext(CursorContext);
    const [ hovering, setHovering ] = useState(false);

    return (
        <div className="icon" 
            onMouseEnter={
                () => {
                    setMouseHover(true); 
                    setHoverType(name);
                    setHovering(true);
                }
            }
            onMouseLeave={
                () => {
                    setMouseHover(false);
                    setHoverType(null);
                    setHovering(false);
                }
            }
                >
                    
            <Icon {...IconProps} hovering={hovering}/>
    </div>

    )
}

function Skills(props) {
    const str = "I speak:"
    const transformValue = `translateX(${1.25 * (props.headerPos) / 2}vw)`;
    
    return (
    <div className="skills-wrapper">
            <h1 className="skills-header" style={{ transform: transformValue }}>
                    {str}
                </h1>
            <div className='technologies'>
                <SkillIcon name="react" Icon={FaReact} IconProps={{ className: "react w-8 h-8 sm:w-10 h-10 md:w-20 h-20 xl:w-24 h-24" }} />
                <SkillIcon name="python" Icon={PythonIcon} IconProps={{ className: "python w-8 h-8 sm:w-10 h-10 md:w-20 h-20 xl:w-24 h-24" }} />
                <SkillIcon name="js" Icon={FaJsSquare} IconProps={{ className: "js w-8 h-8 sm:w-10 h-10 md:w-20 h-20 xl:w-24 h-24" }} />
                <SkillIcon name="css3" Icon={FaCss3Alt} IconProps={{ className: "css3 w-8 h-8 sm:w-10 h-10 md:w-20 h-20 xl:w-24 h-24" }} />
                <SkillIcon name="tailwind" Icon={SiTailwindcss} IconProps={{ className: "tailwind w-8 h-8 sm:w-10 h-10 md:w-20 h-20 xl:w-24 h-24" }} />
                <SkillIcon name="nodejs" Icon={IoLogoNodejs} IconProps={{ className: "nodejs w-8 h-8 sm:w-10 h-10 md:w-20 h-20 xl:w-24 h-24" }} />
                <SkillIcon name="html5" Icon={FaHtml5} IconProps={{ className: "html5 w-8 h-8 sm:w-10 h-10 md:w-20 h-20 xl:w-24 h-24" }} />
            </div>
            {props.headerPos >= 40 ? (<button className="resume" onClick={() => {window.open("https://drive.google.com/file/d/1TiuqYuiBiD6HX0kNNnUoDahcNnhW42We/view", '_blank');}}>
                Resume
            </button>): (<></>)}
    </div>
    );
}

export default Skills;