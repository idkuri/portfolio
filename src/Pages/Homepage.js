import React, { useEffect, useState } from 'react';
import "../styles/homepage.css"
import cat from "../assets/cat.svg"
import Typewriter from 'typewriter-effect';
import Contacts from './Contacts';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi"

function Homepage(props) {
    const myName = "<Andrew/>"
    return (
        <div className="home-wrapper">
                <h1 className='name' id="intro">Hi, I'm</h1>
            <h1 className="name" id="me">{myName}</h1>
            <Typewriter className="typewriter"
                options={{
                    strings: ["Student", "Fullstack Developer"],
                    autoStart: true,
                    loop: true,
                    skipAddStyles: true,
                    pauseFor: 2000,
                    deleteSpeed: 200,
                }}
            />
            <div className='social_wrapper'>
                <FaLinkedinIn className='relative w-full h-full text-white hover:text-blue-500 cursor-pointer' onClick={ ()=> window.open('https://www.linkedin.com/in/acao5/', '_blank')}></FaLinkedinIn>
                <FaGithub className='relative w-full h-full text-white hover:text-black cursor-pointer' onClick={()=> window.open('https://github.com/idkuri', '_blank')}></FaGithub>
                <FiMail className='relative w-full h-full text-white hover:text-gray cursor-pointer' onClick={()=> window.location.href='mailto:acaoy2@gmail.com'}></FiMail>
            </div>

            
        </div>
    );
}

export default Homepage;