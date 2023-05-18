import React, { useEffect, useState } from 'react';
import "../homepage.css"
import cat from "../assets/cat.svg"
import Typewriter from 'typewriter-effect';
import Projects from './projects/MyLyfe';
import Contacts from './Contacts';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi"

function Homepage(props) {
    const myName = "<Kuri/>"
    return (
        <div className="home-wrapper">
            <h1 className="name">{myName}</h1>
            <Typewriter className="typewriter"
                options={{
                    strings: ["Student", "Front-end Developer","Anime Fan"],
                    autoStart: true,
                    loop: true,
                    skipAddStyles: true,
                    pauseFor: 2000,
                    deleteSpeed: 200,
                }}
            />
            <div className='social_wrapper'>
                <FaLinkedinIn className='relative w-full h-full text-white hover:text-blue-500' onClick={ ()=> window.open('https://www.linkedin.com/in/acao5/', '_blank')}></FaLinkedinIn>
                <FaGithub className='relative w-full h-full text-white hover:text-black' onClick={()=> window.open('https://github.com/idkuri', '_blank')}></FaGithub>
                <FiMail className='relative w-full h-full text-white hover:text-gray-500' onClick={()=> window.location.href='mailto:acaoy2@gmail.com'}></FiMail>
            </div>

            
        </div>
    );
}

export default Homepage;