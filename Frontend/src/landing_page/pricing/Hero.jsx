import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row mt-5 p-5 text-center">
        <h1 className="fs-3">Charges</h1>
        <p className="fs-5 text-secondary fw-semibold">
          List of all charges and taxes
        </p>
      </div>
      <div className="row mt-5 p-5">
        <div className="col-4 text-center p-5">
          <img
            src="media/images/pricing0.svg"
            alt=""
            style={{ maxHeight: "200px" }}
            className="mb-4"
          />
          <h1 className="fs-3 text-muted mb-4">Free equity delivery</h1>
          <p className="text-muted fw-medium">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center p-5">
          <img
            src="media/images/intradayTrades.svg"
            alt=""
            style={{ maxHeight: "200px" }}
            className="mb-4"
          />
          <h1 className="fs-3 text-muted mb-4">Intraday and F&O trades</h1>
          <p className="text-muted fw-medium">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 text-center p-5">
          <img
            src="media/images/pricingMF.svg"
            alt=""
            style={{ maxHeight: "200px" }}
            className="mb-4"
          />
          <h1 className="fs-3 text-muted mb-4">Free direct MF</h1>
          <p className="text-muted fw-medium">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
