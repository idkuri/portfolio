import React from 'react';
import "../navbar.css"
import { Link } from 'react-scroll';

function Navbar(props) {
    return (
        <div className='sticky top-0 z-10 h-20 w-full bg-zinc-900'>
            <ul className='navbar'>
                <Link activeClass='active'
                    to='Homepage'
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust this offset as per your layout
                    duration={500}>
                    <li className='cursor-pointer hover:text-purple-600'>About</li>
                </Link>
                <Link activeClass='active'
                    to='Skills'
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust this offset as per your layout
                    duration={500}>
                    <li className='cursor-pointer hover:text-purple-600'>Skills</li>
                </Link>
                <Link activeClass='active'
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust this offset as per your layout
                    duration={500}>
                    <li className='cursor-pointer hover:text-purple-600'>Projects</li>
                </Link>
                <Link activeClass='active'
                    to='contacts'
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust this offset as per your layout
                    duration={500}>
                    <li className='cursor-pointer hover:text-purple-600'>Contact</li>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;