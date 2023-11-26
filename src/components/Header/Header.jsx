import React from 'react'
import logo from '../../Images/logo.png'
import './styles.css'
import { IoMdCloseCircle } from "react-icons/io";

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
            <li>Home</li>
            <li>Services</li>
            <li>Invest</li>
            <li>Calculator</li>
            <li>Contact us</li>
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
            <li onClick={()=>{setShow(false)}}>Home</li>
            <li onClick={()=>{setShow(false)}}>Services</li>
            <li onClick={()=>{setShow(false)}}>Invest</li>
            <li onClick={()=>{setShow(false)}}>Calculator</li>
            <li onClick={()=>{setShow(false)}}>Contact us</li>
         </ul>
       
    </div>}
    </div>
  )
}

export default Header