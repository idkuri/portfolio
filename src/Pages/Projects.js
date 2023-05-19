import {useState} from 'react';
import MyLyfe from './projects/MyLyfe';
import TeamChess from './projects/TeamChess';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./projects/projects.css"

const Projects = () => {
    const [selector, setSelector] = useState(0);
    const items = {
        0: <MyLyfe></MyLyfe>,
        1: <TeamChess></TeamChess>
    }

    const projstr = "</Projects>"

    return (
        <div className='flex w-screen h-screen flex-row gap-20 justify-center items-center'>
            <h1 className='p_header'>{projstr}</h1>
            <MyLyfe></MyLyfe>
            <TeamChess></TeamChess>
            {/* <AiOutlineLeft className='left-button' onClick={() => {setSelector(selector - 1 < 0 ? 1 : selector - 1)}}></AiOutlineLeft>
            <AiOutlineRight className='right-button' onClick={() => {setSelector(selector + 1 > 1 ? 0 : selector + 1)}}></AiOutlineRight> */}
        </div>
    );
};

export default Projects;