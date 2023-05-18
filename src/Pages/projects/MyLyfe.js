import React from 'react';
import myLyfe from "../../assets/myLyfe.png"
import "./projects.css"

function MyLyfe(props) {
    const num = "01"
    return (
        <div className="flex flex-col h-screen w-screen">
            <h1 className="project_header" id="MyLyfe">{num}</h1>
            <div className="logo_wrapper">
                <img src={myLyfe} className='MyLyfe' alt='MyLyfe'></img>
            </div>
        </div>
    );
}

export default MyLyfe;