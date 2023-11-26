import React from 'react'
import logo from '../../Images/logo.png'
import './styles.css'
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
         <div className='ham'>
         {ham} </div>
    </header>
    </div>
  )
}

export default Header