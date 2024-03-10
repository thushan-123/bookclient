import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Call from './pages/Call';
import Home from './pages/Home';
import Singin from './pages/Singin';
import Myaccount from './pages/Myaccount';
import Services from './pages/Services';
import Addbook from './pages/Addbook';
import Err1 from './pages/Err1';
import Image from './pages/Image';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/singin" element={<Singin />} />
            <Route path="/call/:id" element={<Call />} />
            <Route path="/Addbook" element={<Addbook />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Myaccount" element={<Myaccount />} />
            <Route path="/Err1" element={<Err1 />} />
           
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
