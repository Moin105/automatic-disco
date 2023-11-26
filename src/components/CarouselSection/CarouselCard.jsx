import React from 'react'
import './carouselsection.css'
import baths from '../../Images/bath.png'
import './overrides.css'
import beds from '../../Images/bed.png'
import size from '../../Images/size.png'
function CarouselCard({image,name,description,bed,bath,area}) {
  return (
    <div className='card-container'>
         <figure className='image'>
             <img src={image} alt="Flag" />
         </figure>
         <div className='card-content'>
            <div className='card-left'>
                <h3>{name}</h3>
                <p>{description}</p>
                <button className='view'>view</button>
            </div>
            <div className='card-right'>
               <table>
                <tr><th><img src={beds}/></th><th><img src={size}/></th><th><img src={baths}/></th></tr>
                <tbody>
                    <tr><td>{bed}</td><td style={{padding:"16px"}}>{area}</td><td>{bath}</td></tr>
                </tbody>
               </table>
            </div>
         </div>
    </div>
  )
}

export default CarouselCard