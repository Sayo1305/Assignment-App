import React from 'react'
import HomeNavbar from './HomeNavbar';
import '../Assets/css/Home.css';
import bg from '../Assets/Images/bghome.jpg';

const Home = () => {
  return (
    <div>
      <HomeNavbar/>
      <img src={bg} className="BGHOME" alt="bgbackgound" />
      <div className='OverlayHome'></div>
    </div>
  )
}

export default Home;