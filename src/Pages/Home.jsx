import React from 'react';
import Navbar from '../Components/Navbar';
import home from '../Images/home.png';
import '../LocalCSS/home.css';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import Typical from 'react-typical';

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{ position: 'relative', textAlign: 'left' }}>
        <img src={home} alt="Home" style={{ width: '100%', height: 'auto' }} />
        <div style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)', color: 'white', fontSize: '4em', width:'64%' }}>
          <Typical
            steps={['Welcome to Jee Path Finder!', 3000, 'Explore the world with us!', 3000, 'Talk with IITians for Guidance!', 5000]}
            loop={Infinity}
            wrapper="p"
          />
        </div>
      </div>
      <Card />
      <Footer />
    </>
  );
}