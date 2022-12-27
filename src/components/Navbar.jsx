import React from 'react'
import {useNavigate} from 'react-router-dom'
const Navbar = () => {
      const navigate = useNavigate();
  return (
    <div className='Navbar'>
            <button className='NavbarButton' onClick={()=>{navigate('/Login')}}>Login</button>
            <button  className='NavbarButton' onClick={()=>{navigate('/Register')}}>Sign Up</button>
    </div>
  )
}

export default Navbar