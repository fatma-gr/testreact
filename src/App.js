import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Product from './Products/Product';
function App() {
  return (
    <>
      <div>
      <ul>
        <li><a><Link to={"/home"} >Home</Link></a></li>
        <li><a><Link to={"/about"} >About</Link></a></li>
        <li><a><Link to={"/contact"} >Contact</Link></a></li>
      </ul>
           </div>
      <Routes>
    <Route path='/home' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
   </Routes>
    </>
  
  );
}

export default App;
