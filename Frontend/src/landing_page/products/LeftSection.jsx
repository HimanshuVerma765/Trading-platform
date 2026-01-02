import React from "react";
import { Link } from "react-router-dom";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container">
      <div className="row p-5 align-items-center">
        <div className="col-5">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

        <div className="col-6 offset-1">
          <h1 className="mb-4 fs-2 text-muted fw-medium">
            {productName}
          </h1>

          <p>{productDescription}</p>

          <div className="mb-4">
            <Link to={tryDemo} className="text-decoration-none me-4 fw-semibold">
              Try Demo <i class="fa-solid fa-arrow-right"></i>
            </Link>
            <Link to={learnMore} className="text-decoration-none fw-semibold">
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div>
            <a href={googlePlay} target="_blank" rel="noopener noreferrer">
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore} target="_blank" rel="noopener noreferrer">
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
