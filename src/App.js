import Homepage from './Pages/Homepage';
import Contacts from './Pages/Contacts';
import Pages from './Pages/Pages';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path ="/" element={<Pages/>}/>
      </Routes>
    </>
  );
}

export default App;
