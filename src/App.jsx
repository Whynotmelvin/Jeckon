import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/pages/About';
import Career from './components/pages/Careers';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/careers' element={<Career/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}
export default App;
