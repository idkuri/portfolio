import React from 'react';
import chesslogo from "../../assets/Team_Chess.png"
import homepage_background from "../../assets/chess_homepage.png"
import "./projects.css"

function TeamChess(props) {
    const num = "02"
    return (
        <div className="project_elem" onClick={() => {window.open('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442x/Link/', "__blank")}}>
            <h1 className="project_header" id="TeamChess">{num}</h1>
            <img className="background" src={homepage_background} alt="mygoals"></img>
            <div className="logo_wrapper" id="teamchess">
                <img src={chesslogo} className='TeamChess' alt='TeamChess'></img>
            </div>
            <p className='project_description' id="teamchess">
                Team Chess is a dedicated platform designed to facilitate chess games and enhance the chess-playing experience for members 
                of the UB chess club.
            </p>
        </div>
    );
}

export default TeamChess;