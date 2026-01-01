import React from "react";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <h1 className="text-center fs-3 text-secondary">People</h1>
      </div>
      <div className="row p-5 text-muted" style={{ lineHeight: "1.8" }}>
        <div className="col-6 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "55%" }}
            alt=""
          />
          <h4 className="mt-3">Nithin Kamath</h4>
          <p>Founder, CEO</p>
        </div>
        <div className="col-6" style={{ fontSize: "17px" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <span>
              <Link className="text-decoration-none">Homepage</Link>
            </span>{" "}
            /{" "}
            <span>
              <Link className="text-decoration-none">TradingQnA</Link>
            </span>{" "}
            /{" "}
            <span>
              <Link className="text-decoration-none">Twitter</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
