import React from "react";
import {useNavigate} from 'react-router-dom';
const HomeNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="HomeNavbar">
      <div>Logo</div>
      <div>Note Take APP</div>
      <input type={"search"} placeholder ="seech for "/>
      <div>
        <svg
          onClick={()=>{navigate('/')}}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-person-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
      </div>
    </div>
  );
};

export default HomeNavbar;
