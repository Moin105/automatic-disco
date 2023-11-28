import React from "react";
import SimpleSlider from "../components/Images/SlickGallery";
import Footer from "../components/Footer/Footer";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

import "./styles.css";
function UpforSale() {
  return (
    <div className="page-template">
      <div className="row-header-sector">
      <Link to="/">
          <FaArrowLeft />
        </Link>
      </div>
      <div className="spacer">
      <SimpleSlider />
      </div>
      <Footer />
    </div>
  );
}

export default UpforSale;
