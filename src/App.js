import { useEffect } from 'react';
import Homepage from './Pages/Homepage';
import Contacts from './Pages/Contacts';
import Pages from './Pages/Pages';
import Navbar from './Components/Navbar';
import Projects from './Pages/Projects';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';

function App() {

  // Disable Ctrl + Scroll
  useEffect(() => {
    const handleWheel = (event) => {
      // Check if Ctrl or Cmd key is pressed
      if (event.ctrlKey || event.metaKey) {
        // Prevent the default zooming behavior
        event.preventDefault();
      }
    };

    // Add event listener to the window
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
  return (
    <>
      <Routes>
        <Route path ="/" element={<Pages/>}/>
        <Route path ="/projects" element={<Projects/>}/>
      </Routes>
    </>
  );
}

export default App;
