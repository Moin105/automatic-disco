import React from 'react'
import './banner.css'
import banner from '../../Images/herp.png'
function Banner() {
  return (
    <div className='banner'>
      <div className='image-banner'>
           <img src={banner}/>
      </div>
       <div className='banner-content'>
              <h2>You dream we work for it</h2>
              <div className='banner-button-container'>
              <button >Contact Us</button>
              </div>
       </div>
    </div>
  )
}

export default Banner