import {useState} from 'react';
import MyLyfe from './projects/MyLyfe';
import TeamChess from './projects/TeamChess';
import Reversi from './projects/Reversi';
import SnapTranslate from './projects/SnapTranslate';
import "./projects/projects.css"

const Projects = () => {
    const [selector, setSelector] = useState(0);
    const items = {
        0: <MyLyfe></MyLyfe>,
        1: <TeamChess></TeamChess>,
        2: <Reversi></Reversi>,
    }




    return (
        <div className='flex w-screen h-screen flex-row gap-20 pb-1'>
            <h1 className='p_header'>{`<Projects>`}</h1>
            <div className='carousel'>
                <MyLyfe/>
                <TeamChess/>
            </div>
        </div>
    );
};

export default Projects;