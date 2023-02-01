import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import Solutions from './Component/Solutions/Solutions';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Error from './Component/Error/Error';
import Navbar from './Navbar/Navbar';


const App = () => {
  return (
    <>
      
      <Navbar />

      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Solutions' element={<Solutions />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='*' element={<Error/>} />

        </Routes>
      </Router>

    </>
  )
}

export default App;