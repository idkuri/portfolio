import React from 'react';
import "../aboutme.css"

const AboutMe = (props) => {
    console.log(props.headerPos)
    return (
        <>
            {props.headerPos >= 10 ? (
            <>
                <h1 className='p_header' id="aboutme">A Little More About Me:</h1>
                <div className='content'>
                    Hello! I'm Andrew, Developer, Student, Gamer, and a bit of an Otaku. I am currently working on projects and looking for internships
                    to further expand my knowledge and my skills as a Frontend/Fullstack Developer.
                </div>
            </>
            ): (<></>)}
        </>
    );
};

export default AboutMe;