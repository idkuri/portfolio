import React, { useEffect, useState } from 'react';
import "../homepage.css"
import cat from "../assets/cat.svg"
import Typewriter from 'typewriter-effect';
import Projects from './Projects';
import Contacts from './Contacts';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

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
            <></>
            <div className='social_wrapper'>
                <FaLinkedinIn className='relative w-10 h-20 text-white hover:text-blue-500' onClick={ ()=> window.open('https://www.linkedin.com/in/acao5/', '_blank')}></FaLinkedinIn>
                <FaGithub className='relative w-10 h-20 text-white hover:text-black' onClick={()=> window.open('https://github.com/idkuri', '_blank')}></FaGithub>
            </div>

            
        </div>
    );
}

export default Homepage;