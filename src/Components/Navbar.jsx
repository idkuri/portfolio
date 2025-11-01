import React, { useContext } from 'react';
import "../styles/navbar.css"
import { Link } from 'react-scroll';
import HomeIcon from '../assets/home-icon.svg';
import FolderIcon from '../assets/folder-icon.svg'
import { FaHome, FaFolder } from 'react-icons/fa';
import { CursorContext } from '../Contexts/CursorContext';

function Navbar(props) {
    const { mouseHover, setMouseHover } = useContext(CursorContext);

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
        <div id="navbar" className='fixed flex justify-center top-0 z-10 h-20 w-full bg-transparent'>
            <ul className='navbar gap-10'>
                <Link activeClass='active'
                    to='Homepage'
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust this offset as per your layout
                    duration={500}>
                    <li className={`cursor-pointer hover:text-purple-600`} onClick={scrollToHomepage}>
                        <FaHome 
                            className={`navbar-icon relative w-full h-full ${props.currentSection === 0 ? "text-purple-500": "text-white"} hover:text-purple-500 `} 
                            // onMouseEnter={() => setMouseHover(true)}
                            // onMouseLeave={() =>setMouseHover(false)} 
                            alt='homepage button'
                        />
                    </li>
                </Link>
                <Link activeClass='active'
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust this offset as per your layout
                    duration={500}>
                    <li className='cursor-pointer hover:text-purple-600' onClick={scrollToProject}>
                        <FaFolder 
                            className={`navbar-icon relative w-full h-full ${props.currentSection === 2 ? "text-purple-500": "text-white"} hover:text-purple-500`}
                            // onMouseEnter={() => setMouseHover(true)}
                            // onMouseLeave={() =>setMouseHover(false)}
                            alt='projects button'/>
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;