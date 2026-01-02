import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container mt-5 text-center p-5 border-bottom">
      <h1 className="fs-3 mb-4 fw-medium">Zerodha Products</h1>
      <h3 className="fs-5 fw-normal mb-4 text-muted">Sleek, modern, and intuitive trading platforms</h3>
      <p className="mb-5">Check out our <span><Link className="text-decoration-none">investment offerings <i class="fa-solid fa-arrow-right"></i></Link></span></p>
    </div>
  );
};

export default Hero;
