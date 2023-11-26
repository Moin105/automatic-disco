import React from 'react'
import './section.css'
import section from '../../Images/section.png'
function Section() {
  return (
    <div className='section container'>
         <div className='section-left'>
                <h2>You are in good hands</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur. Cursus pulvinar scelerisque id nam. Quam sagittis morbi ornare scelerisque luctus elit viverra faucibus tellus. Tristique vulputate nunc ac pellentesque id massa ridiculus congue dolor. Imperdiet ut fringilla magna quam pharetra nibh orci. Faucibus mattis luctus amet tellus sed dictumst eget. Pellentesque orci id.
                </p>
                <button className='learn-more'>
                 Learn More
                </button>
         </div>
         <div className='section-right'>
                <figure>
                    <img src={section} alt="section image" />    
                </figure>
         </div>
    </div>
  )
}

export default Section