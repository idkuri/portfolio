import React from 'react';
import chesslogo from "../../assets/Team_Chess.png"
import "./projects.css"

function TeamChess(props) {
    const num = "02"
    return (
        <div className="flex flex-col h-screen w-screen">
            <h1 className="project_header" id="TeamChess">{num}</h1>
            <div className="logo_wrapper">
                <img src={chesslogo} className='TeamChess' alt='TeamChess'></img>
            </div>
        </div>
    );
}

export default TeamChess;