import React from "react";
import {useNavigate} from 'react-router-dom'
import Navbar from "./Navbar";
const Main = () => {
      const navigate = useNavigate();
  return (
    <>
      <Navbar/>
      <div className="BackgroundMain"></div>
      <div className="Background_text">
        <div className="BackgroundText1">Reminder: Your Notes Matter</div>
        <div className="BackgroundText2">Download Notes | Upload Notes</div>
        <button className="BackgroundButton" onClick={()=> { navigate('/Login');}}>Login</button>
      </div>
    </>
  );
};

export default Main;
