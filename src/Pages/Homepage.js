import React from 'react';
// import background from '../assets/background.png'
import "../homepage.css"
import cat from "../assets/cat.svg"

function Homepage(props) {
    return (
        <div className="wrapper">
            <div id="header">
                <h className='font'>Hello, I'm Kuri</h>
                {/* <img src={background} alt="background" className="background"/> */}
            </div>
            <img src={cat} alt="cat" className="cat"/>
        </div>
    );
}

export default Homepage;