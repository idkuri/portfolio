import React from 'react';
import "../styles/navbar.css"
import { Link } from 'react-scroll';
import HomeIcon from '../assets/home-icon.svg';
import FolderIcon from '../assets/folder-icon.svg'
import { FaHome, FaFolder } from 'react-icons/fa';

function Navbar(props) {

    const scrollToProject = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            })
        }
    }

    const scrollToHomepage = () => {
        const projectsSection = document.getElementById('homepage');
        if (projectsSection) {
            projectsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            })
        }
    }

    return (
        <div className='absolute flex justify-center top-0 z-10 h-20 w-full bg-transparent'>
            <ul className='navbar'>
                <Link activeClass='active'
                    to='Homepage'
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust this offset as per your layout
                    duration={500}>
                    <li className='cursor-pointer hover:text-purple-600' onClick={scrollToHomepage}>
                        <FaHome className='navbar-icon relative w-full h-full text-white hover:text-purple-500'/>
                    </li>
                </Link>
                <Link activeClass='active'
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust this offset as per your layout
                    duration={500}>
                    <li className='cursor-pointer hover:text-purple-600' onClick={scrollToProject}>
                        <FaFolder className='navbar-icon relative w-full h-full text-white hover:text-purple-500'/>
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;