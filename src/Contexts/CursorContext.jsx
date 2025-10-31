import {React, useEffect, useState, useContext, createContext} from 'react';
import { motion } from 'framer-motion';


const CustomCursor = ({ mouseHover }) => {
    const [mousePos, setMousePos] = useState({x: 0, y: 0})

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({x: event.clientX, y: event.clientY});
        }

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])
    
    
    return (
        <motion.div 
          className={`fixed w-10 h-10 bg-linear-to-r from-purple-400 to-pink-200 rounded-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none`}
          style={{ zIndex: 99 }}
          animate={{
            x: mousePos.x,
            y: mousePos.y,
            scale: mouseHover ? 5 : 1,  // example: scale up on hover or some condition
            opacity: mouseHover ? 0.5: 1
          }}
          transition={{
            x: { duration: 0 },  // instant snapping
            y: { duration: 0 },  // instant snapping
            scale: { type: "spring", stiffness: 300, damping: 20 } // smooth scaling
          }}
        />

    );
};

export default CustomCursor;


export const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [mouseHover, setMouseHover] = useState(false)
 
  return (
    <CursorContext.Provider value={{ mouseHover, setMouseHover }}>
      {children}
      <CustomCursor mouseHover={mouseHover} style={{zIndex: mouseHover? -1: 99}}/>
    </CursorContext.Provider>
  )
}