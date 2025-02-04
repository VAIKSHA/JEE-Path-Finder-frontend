import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'; // Assuming you have a Footer component
import Home from './Pages/Home'; // Assuming you have a Home component
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Slotbook from './Pages/Slotbook';
import Aboutus from './Pages/Aboutus';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/book-slot' element={<Slotbook />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;