import React, { Component } from "react";
import Slider from "react-slick";
import slide1 from '../../Images/slide.png'
import slide2 from '../../Images/slide2.png'
import slide3 from '../../Images/slide3.png'
import slide4 from '../../Images/slide4.png'
import slide5 from '../../Images/slide5.png'
import slide6 from '../../Images/slide6.png'



import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselCard from "./CarouselCard";
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
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
    const data = [
    {name : 'House 1',image:slide1,description:'New Jersey',bath:'2',bed:'3',area:'1500 sqft'},
    {name : 'House 2',image:slide2,description:'Jackson',bath:'2',bed:'3',area:'1500 sqft'},
    {name : 'House 3',image:slide3,description:'Las Vegas',bath:'2',bed:'3',area:'1500 sqft'},
    {name : 'House 4',image:slide4,description:'Texas',bath:'2',bed:'3',area:'1500 sqft'},
    {name : 'House 5',image:slide5,description:'New York',bath:'2',bed:'3',area:'1500 sqft'},
    {name : 'House 6',image:slide6,description:'Washington',bath:'2',bed:'3',area:'1500 sqft'},
    ]
    return (
      <div style={{background:"#f5f5f5"}}>

      
      <div className="carousel-sections container">
        <h2>Recently Up For Sale </h2>
        <Slider {...settings}>
         {
          data.map((item,index)=>{
            return(
              <div key={index}>
                <CarouselCard image={item.image}name={item.name} description={item.description} bath={item.bath} area={item.area} bed={item.bed} />
              </div>
            )
          })}
      
        </Slider>
      </div>
      </div>
    );
  }
}