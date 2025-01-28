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
        <img src={home} alt="Home" style={{ width: '100%', height: 'auto', marginTop:'60px'}} />
        <div style={{ position: 'absolute', top: '60%', left: '10%', transform: 'translateY(-50%)', color: 'white', fontSize: '2.5em', width:'64%' }}>
          <Typical
            steps={['Welcome JEE Aspirants!', 3000, 'Explore the world with us!', 3000, 'Talk with IITians!', 5000]}
            loop={Infinity}
            wrapper="p"
          />
        </div>
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
      <Footer />
    </>
  );
}