// import React,{Component} from 'react'
// import './carouselsection.css'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import './overrides.css'
// import CarouselCard from './CarouselCard';
// import slide1 from '../../Images/Rectangle 49.png'
// import Slider from "react-slick";


//  export default class NextJsCarousel extends Component {
  
//   render() {
//   return  <div className='carousel-section container'>
//           <h2>Recently Up For Sale</h2>
//           <Carousel>
 
//         <CarouselCard image={slide1}/>
    
//         <CarouselCard image={slide1}/>


//       {/* Add more slides with images and captions */}
//     </Carousel>
//     </div>
//  }
// }
import React from 'react'
import './carouselsection.css'
import MultipleItems from './Slick';
import CarouselCard from './CarouselCard';
function CarouselSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='carousel-sections container'>
          {/* <h2>Recently Up For Sale</h2>
       <MultipleItems/> */}
    </div>
  )
}

export default CarouselSection