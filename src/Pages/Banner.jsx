import React from "react";
import Banner from "../components/Banner/Banner";
import Section from "../components/Section/Section";
import Footer from "../components/Footer/Footer";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./styles.css";
function BannerPage() {
  return (
    <div className="page-template">
      <div className="row-header-sector">
      <Link to="/">
          <FaArrowLeft />
        </Link>
      </div>
      <div>
      <Banner />
      </div>
      <div className="spacer">
      <Section />
      </div>
      <Footer />
    </div>
  );
}

export default BannerPage;
