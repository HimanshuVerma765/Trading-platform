import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid" id="supportSection">
      <div className="pt-5" id="supportWrapper">
        <h1 className="fs-2">Support Portal</h1>
        <a href="" className="text-decoration-none" style={{ color: "white" }}>
          Track Tickets
        </a>
      </div>
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            className="p-3 my-4"
            style={{ width: "100%", border:"1px solid rgba(0,0,0,0.2)", borderRadius:"10px" }}
            placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
          />
          <a
            href=""
            className=" text-decoration-none"
            style={{ color: "white", marginRight: "2rem" }}
          >
            Track segment activation
          </a>
          <a
            href=""
            className=" text-decoration-none"
            style={{ color: "white", marginRight: "2rem" }}
          >
            Track account opening
          </a>
          <a
            href=""
            className=" text-decoration-none"
            style={{ color: "white", marginRight: "2rem" }}
          >
            Intraday margins
          </a>
          <br />
          <a
            href=""
            className=" text-decoration-none"
            style={{ color: "white", marginRight: "2rem" }}
          >
            Kite user manual
          </a>
        </div>
        <div className="col-5 offset-1 p-5">
          <h1 className="fs-2">Featured</h1>
          <ol>
            <li>Current Takeovers and Delisting – January 2024</li>
            <li>Latest Intraday leverages – MIS & CO</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;
