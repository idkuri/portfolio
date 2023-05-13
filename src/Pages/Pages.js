import React from 'react';
import Homepage from './Homepage';
import Skills from './Skills';
import Projects from './Projects';
import Contacts from './Contacts';
import "../App.css"

function Pages(props) {
    return (
        <div className='pageContainer'>
            <section className="homepage" id="homepage">
                <Homepage></Homepage>
            </section>
            <section className="skills" id="skills">
                <Skills></Skills>
            </section>
            <section className="projects" id="projects">
                <Projects></Projects>
            </section>
            <section className="contacts" id="contacts">
                <Contacts></Contacts>
            </section>
            
        </div>
    );
}

export default Pages;