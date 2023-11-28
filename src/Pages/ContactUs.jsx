import React from "react";
import Contact from "../components/Contact/Contact";
import "./styles.css";
import Footer from "../components/Footer/Footer";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <div className="page-template">
      <div className="row-header-sector">
      <Link to="/">
          <FaArrowLeft />
        </Link>
      </div>
      <div className="spacer">
      <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
