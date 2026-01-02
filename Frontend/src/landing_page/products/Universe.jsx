import React from "react";

const Universe = () => {
  return (
    <div className="container py-5">
      <div className="row text-center mb-5 p-5">
        <div className="col">
          <h1 className="fs-2 fw-medium text-muted mb-3">
            The Zerodha Universe
          </h1>
          <p className="text-muted">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>

      <div className="row text-center g-5 p-5 ">
        <div className="col-md-4">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            className="img-fluid mb-3"
            style={{ maxHeight: "50px" }}
          />
          <p
            className="text-secondary fw-semibold"
            style={{ fontSize: "13px" }}
          >
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>

        <div className="col-md-4">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            style={{ height: "50px" }}
            className="mb-3"
          />

          <p
            className="text-secondary fw-semibold"
            style={{ fontSize: "13px" }}
          >
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>

        <div className="col-md-4">
          <img
            src="media/images/tijori.svg"
            alt="Tijori"
            className="img-fluid mb-3"
            style={{ maxHeight: "50px" }}
          />
          <p
            className="text-secondary fw-semibold"
            style={{ fontSize: "13px" }}
          >
            Investment research platform <br />
            that offers detailed insights on stocks,
            <br /> sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-md-4">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            className="img-fluid mb-3"
            style={{ maxHeight: "50px" }}
          />
          <p
            className="text-secondary fw-semibold"
            style={{ fontSize: "13px" }}
          >
            Systematic trading platform <br /> that allows you to create and
            backtest <br />
            strategies without coding.
          </p>
        </div>

        <div className="col-md-4">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid mb-3 "
            style={{ maxHeight: "50px" }}
          />
          <p
            className="text-secondary fw-semibold"
            style={{ fontSize: "13px" }}
          >
            Thematic investing platform <br />
            that helps you invest in diversified <br />
            baskets of stocks or ETFs.
          </p>
        </div>

        <div className="col-md-4">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            className="img-fluid mb-3"
            style={{ maxHeight: "50px" }}
          />
          <p
            className="text-secondary fw-semibold"
            style={{ fontSize: "13px" }}
          >
            Personalized advice on life <br />
            and health insurance. No spam <br />
            and no mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          SignUp now
        </button>
      </div>
    </div>
  );
};

export default Universe;
