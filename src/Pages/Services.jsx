import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import ImagesGallery from "../components/Images/ImagesGallery";
import Footer from "../components/Footer/Footer";
import "./styles.css";
import { Link } from "react-router-dom";
function Services() {
  return (
    <div className="page-template">
      <div className="row-header-sector">
        <Link to="/">
          <FaArrowLeft />
        </Link>
      </div>
      <div className="spacer">
        <ImagesGallery />
      </div>
      <Footer />
    </div>
  );
}

export default Services;
