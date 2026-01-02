import React from "react";
import { Link } from "react-router-dom";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
}) => {
  return (
    <div className="container">
      <div className="row p-5 align-items-center">
        <div className="col-5">
          <h1 className="mb-4 fs-2 text-muted fw-medium">{productName}</h1>
          <p>{productDescription}</p>
          <div className="mb-4">
            <Link
              to={tryDemo}
              className="text-decoration-none me-4 fw-semibold"
            >
              Try Demo <i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="col-6  offset-1">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
