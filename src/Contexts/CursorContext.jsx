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
        className={`fixed w-5 h-5 bg-linear-to-r from-purple-400 to-pink-200 rounded-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none 
          ${mouseHover ? "shadow-[0_0_10px_10px_rgba(168,85,247,0.6)]" : "shadow-[0_0_15px_15px_rgba(168,85,247,0.6)]"}`}
        style={{ zIndex: 99 }}
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          scale: mouseHover ? 10 : 1,
          opacity: mouseHover ? 0.5 : 1
        }}
        transition={{
          x: { duration: 0 },
          y: { duration: 0 },
          scale: { type: "spring", stiffness: 300, damping: 20 }
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