import React from 'react'
import logo from '../../Images/logo.png'
import './styles.css'
import { IoMdCloseCircle } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [show,setShow] = React.useState(false)
  const ham =<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 12H21" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3 6H21" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3 18H21" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  return (
    <div className='container'>
    <header className='header'>
         <figure>
            <img src={logo} alt="logo" />
         </figure>
         <div className='nav'>
         <ul>
            <Link to="/home">
            <li>Home</li>
            </Link>
            <Link to="/services">
            <li>Services</li>
            </Link>
            <Link to="/upforsale">
            <li>Up for Sale</li>
            </Link>
            {/* <Link to="">
            <li>Invest</li>
            </Link> */}
            {/* <Link>
            <li>Calculator</li>
            </Link> */}
            <Link to="/contact">
            <li>Contact us</li>
            </Link>
            
            
           
           
         </ul>
         <button className='button'>Work with us</button>
         </div>
         <div className='ham' onClick={()=>{setShow(!show)}}>
         {ham} </div>
    </header>
 {show &&   <div className='flayer'>
 <div className='close'>
    <button className='button' onClick={()=>{setShow(false)}} ><IoMdCloseCircle/></button>
     </div>   
    <ul>
           <Link to="/home">
           <li onClick={()=>{setShow(false)}}>Home</li>
           </Link> 
           <Link to="/services">
            <li onClick={()=>{setShow(false)}}>Services</li>
            </Link>
            <Link to="/upforsale">
            <li onClick={()=>{setShow(false)}}>Up for Sale</li>
            </Link>
           <Link to="/contact">
            <li onClick={()=>{setShow(false)}}>Contact us</li>
           </Link>
         </ul>
       
    </div>}
    </div>
  )
}

export default Header