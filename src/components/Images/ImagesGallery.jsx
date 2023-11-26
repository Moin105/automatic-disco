import React from "react";
import './imagesgallery.css'
import top from '../../Images/top.png'
import bottomtop from '../../Images/bottomtop.png'
import bottomleftbottom from '../../Images/bottomleftbottom.png'
import box2 from '../../Images/box2.png'  
import innerleftbottom from '../../Images/innerleftbottom.png'
import bottomrightbottoms from '../../Images/bottomrightbottoms.png'
import box from '../../Images/box.png'
import SimpleSlider from "./SlickGallery";
function ImagesGallery() {
  return (
    <>
    <div className="shoers">
    <SimpleSlider/>
    </div>
   
    <div className="gallery container">
      
      <div className="gallery-left">
        <div className="gallery-box">
          <div className="top">
            <img src={top} alt="top" />
          </div>
          <div className="bottom">
            <div className="bottom-left">
              <div className="custom-box">
                <img src={box} />
              </div>
              <div className="bottom-left-bottom">
                   <img src={bottomleftbottom}/>
              </div>
            </div>
            <div className="bottom-right">
              <div className="bottom-right-top">
                <img src={bottomtop}/>
              </div>
              <div className="bottom-right-bottom">
                <div className="inner-left">
                  <div className="inner-left-top">
                    <img src={box2}/>
                  </div>
                  <div className="inner-left-bottom">
                    <img src={innerleftbottom}/>
                  </div>
                </div>
                <div className="inner-right">
                  <img src={bottomrightbottoms}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-right">
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
      </div>
    </div>
    </>
  );
}

export default ImagesGallery;
