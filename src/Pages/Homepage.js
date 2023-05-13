import React from 'react';
// import background from '../assets/background.png'
import "../homepage.css"
import cat from "../assets/cat.svg"
import Typewriter from 'typewriter-effect';
import Projects from './Projects';
import Contacts from './Contacts';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Homepage(props) {
    return (
        <div className="wrapper">
            <div className="header">
                <h className='font'>Hello, I'm </h>
                <h className='font' id="name">Kuri</h>
                <Typewriter className="typewriter"
                    options={{
                        strings: ["Student.", "Anime Fan."],
                        autoStart: true,
                        loop: true,
                        skipAddStyles: true,
                        pauseFor: 2000,
                        deleteSpeed: 200,
                    }}
                />
                <div className='social_wrapper'>
                    <FaLinkedinIn className='relative w-10 h-10 text-white hover:text-blue-500' onClick={ ()=> window.open('https://www.linkedin.com/in/acao5/', '_blank')}></FaLinkedinIn>
                    <FaGithub className='relative w-10 h-10 text-white hover:text-black' onClick={()=> window.open('https://github.com/idkuri', '_blank')}></FaGithub>
                </div>
            </div>
            <div className="cat">
                <img src={cat} alt="cat"/>
            </div>
        </div>
    );
}

export default Homepage;