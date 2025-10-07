import { createContext, useContext, useState, useCallback, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "../styles/App.css"
import { random } from "animejs";

// Create context
const GridContext = createContext();

// Custom hook to use the context
export const useGrid = () => useContext(GridContext);

// Provider component
export const GridProvider = ({ children }) => {
    const [columns, setColumns] = useState(0);
    const [rows, setRows] = useState(0);
    const [toggled, setToggled] = useState(true);

    const createTile = useCallback(index => {
        return <div className="tile" key={index}></div>;
    }, []);

    const createGrid = useCallback(quantity => {
        return (
            <>
              <div className="wallpaper" style={{ opacity: toggled ? 0 : 1 }} />
              <div className="grid" style={{ "--columns": columns, "--rows": rows }}>
                {Array.from(Array(quantity)).map((_, index) => createTile(index))}
              </div>
            </>
        )
    }, [createTile, columns, rows, toggled]);

    const resizeHandler = useCallback(() => {
        const container = document.querySelector('.pageContainer');
        if (!container) return;

        const newColumns = Math.floor(container.clientWidth / 125);
        const newRows = Math.floor(container.clientHeight / 125);

        setColumns(newColumns);
        setRows(newRows);
    }, [toggled]);

    useEffect(() => {
        const handlePageShow = (event) => {
            setToggled(true);
            resizeHandler();
        };
    
        window.addEventListener("pageshow", handlePageShow);
    
        return () => window.removeEventListener("pageshow", handlePageShow);
    }, []);

    useEffect(() => {
        animateTiles();
        if (!toggled) {
            const wallpaper = document.querySelector('.wallpaper');
            wallpaper.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [rows, columns, toggled])

    const animateTiles = useCallback(() => {
        const totalTiles = columns * rows;
        const randomIndex = Math.floor(Math.random() * totalTiles);
        anime({
            targets: ".tile",
            opacity: toggled ? 0 : 1,
            delay: anime.stagger(50, {
                grid: [columns, rows],
                from: randomIndex,
            }),
        });

        const tiles = document.querySelectorAll(".grid");
        tiles.forEach(tile => (tile.style.pointerEvents = "none"));
        const pageContainer = document.querySelector(".pageContainer");
        const navbarContainer = document.querySelector("#navbar")
        if (toggled) {
            // Reset styles when toggled is true
            if (pageContainer) pageContainer.style.pointerEvents = "auto";
            if (navbarContainer) navbarContainer.style.display = "flex";
        } else {
            // Disable interaction when toggled is false
            if (pageContainer) pageContainer.style.pointerEvents = "none";
            if (navbarContainer) navbarContainer.style.display = "none";
        }
    }, [columns, rows, toggled]);

    return (
        <GridContext.Provider
            value={{
                columns,
                rows,
                toggled,
                setToggled,
                createGrid,
                resizeHandler,
                animateTiles,
            }}
        >
            {children}
        </GridContext.Provider>
    );
};
