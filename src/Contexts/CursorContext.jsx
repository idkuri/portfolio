import React, { useEffect, useState, useContext, createContext } from "react";
import { motion } from "framer-motion";

// ---------- Custom Cursor ----------
const CustomCursor = ({ mouseHover, hoverType }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const cursorColor = {
    default: {
      gradient: "bg-gradient-to-r from-purple-400 to-pink-200", // real gradient
      glow: "rgba(168,85,247,0.6)",
    },
    react: {
      bg: "bg-[#61DBFB]",
      glow: "rgba(97,219,251,0.6)",
    },
    js: {
      bg: "bg-[#f0db4f]",
      glow: "rgba(240,219,79,0.6)",
    },
    css3: {
      bg: "bg-[#264de4]",
      glow: "rgba(38,77,228,0.6)",
    },
    tailwind: {
      bg: "bg-[#4dc0b5]",
      glow: "rgba(77,192,181,0.6)",
    },
    nodejs: {
      bg: "bg-[#68a063]",
      glow: "rgba(104,160,99,0.6)",
    },
    html5: {
      bg: "bg-[#e34c26]",
      glow: "rgba(227,76,38,0.6)",
    },
    python: {
      gradient: "bg-[linear-gradient(135deg,#4B8BBE_30%,#FFD43B_100%)]",
      glow: [
        "0 0 10px 5px rgba(75,139,190,0.6)",   // blue glow
        "0 0 20px 12px rgba(255,212,59,0.5)",  // yellow glow
      ],
    },
    java: {
      bg: "bg-gray-500",
      glow: "rgba(107,114,128,0.6)",
    },
    php: {
      bg: "bg-[#8993be]",
      glow: "rgba(137,147,190,0.6)",
    },
  };

  const current = cursorColor[hoverType] || cursorColor.default;

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className={`fixed w-5 h-5 rounded-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none 
        ${
          current.bg
            ? current.bg
            : `${current.gradient}`
        }`}
      style={{
        zIndex: 99,
        boxShadow: Array.isArray(current.glow)
          ? current.glow.join(",")
          : mouseHover
          ? `0 0 10px 10px ${current.glow}`
          : `0 0 15px 15px ${current.glow}`,
      }}
      animate={{
        x: mousePos.x,
        y: mousePos.y,
        scale: mouseHover ? 10 : 1,
        opacity: mouseHover ? 0.5 : 1,
      }}
      transition={{
        x: { duration: 0 },
        y: { duration: 0 },
        scale: { type: "spring", stiffness: 300, damping: 20 },
      }}
    />
  );
};

// ---------- Cursor Context ----------
export const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [mouseHover, setMouseHover] = useState(false);
  const [hoverType, setHoverType] = useState(null);

  return (
    <CursorContext.Provider
      value={{ mouseHover, setMouseHover, hoverType, setHoverType }}
    >
      {children}
      <CustomCursor mouseHover={mouseHover} hoverType={hoverType} />
    </CursorContext.Provider>
  );
};