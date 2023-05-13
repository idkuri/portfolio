import Homepage from './Pages/Homepage';
import Contacts from './Pages/Contacts';
import Projects from './Pages/Projects';
import Pages from './Pages/Pages';
// import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path ="/" element={<Pages/>}/>
        <Route path ="/contacts" element={<Contacts/>}/>
        <Route path ="/projects" element={<Projects/>}/>
      </Routes>
    </>
  );
}

export default App;
