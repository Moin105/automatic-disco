import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
        <div className="project-card">
          <span className="color-yellow-text">500+</span>
          <h3>Projects</h3>
          <p>Over 500 lexury villas for“Home Away From Home” experience</p>
        </div>
        <div className="project-card">
          <span className="color-yellow-text">40+</span>
          <h3>Locations</h3>
          <p>luxury villas and private holiday homes, from all across</p>
        </div>
        <div className="project-card">
          <span className="color-yellow-text">24/7</span>
          <h3>Help</h3>
          <p>24/7 Help service for all customers to guide and support</p>
        </div>
        </Slider>
      </div>
    );
  }
}