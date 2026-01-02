import React from "react";

const CreateTicket = () => {
  return (
    <div className="container p-5">
      <h1 className="fs-2 mt-5">To create a ticket, select a relevant topic</h1>
      <div className="row p-5">
        <div className="col-4 ">
          <h1 className="fs-4 mb-5"><i class="fa-solid fa-circle-plus"></i> Account Opening</h1>
          <ul className="list-unstyled text-muted fw-medium " style={{lineHeight:"3", fontSize:"17px"}}>
            <li><a href="" className="text-decoration-none">Online Account Opening</a></li>
            <li><a href="" className="text-decoration-none">Offline Account Opening</a></li>
            <li><a href="" className="text-decoration-none">Company, Partnership and HUF Account Opening</a></li>
            <li><a href="" className="text-decoration-none">NRI Account Opening</a></li>
            <li><a href="" className="text-decoration-none">Charges at Zerodha</a></li>
            <li><a href="" className="text-decoration-none">Zerodha IDFC FIRST Bank 3-in-1 Account</a></li>
            <li><a href="" className="text-decoration-none">Getting Started</a></li>
          </ul>
        </div>
        <div className="col-4 px-5">
          <h1 className="fs-4 mb-5"><i class="fa-solid fa-user"></i> Your Zerodha Account</h1>
          <ul className="list-unstyled text-muted fw-medium" style={{lineHeight:"3", fontSize:"17px"}}>
            <li><a href="" className="text-decoration-none">Login Credentials</a></li>
            <li><a href="" className="text-decoration-none">Account Modification and Segment Addition</a></li>
            <li><a href="" className="text-decoration-none">DP ID and bank details</a></li>
            <li><a href="" className="text-decoration-none">Your Profile</a></li>
            <li><a href="" className="text-decoration-none">Transfer and conversion of shares</a></li>
          </ul>
        </div>
        <div className="col-4 px-5">
          <h1 className="fs-4 mb-5"><i class="fa-solid fa-chart-column"></i> Your Zerodha Account</h1>
          <ul className="list-unstyled text-muted fw-medium" style={{lineHeight:"3", fontSize:"17px"}}>
            <li><a href="" className="text-decoration-none">Margin/Leverage, Product and Order types</a></li>
            <li><a href="" className="text-decoration-none">Kite Web and Mobile</a></li>
            <li><a href="" className="text-decoration-none">Trading FAQs</a></li>
            <li><a href="" className="text-decoration-none">Corporate Actions</a></li>
            <li><a href="" className="text-decoration-none">Sentinel</a></li>
            <li><a href="" className="text-decoration-none">Kite API</a></li>
            <li><a href="" className="text-decoration-none">Pi and other platform</a></li>
            <li><a href="" className="text-decoration-none">Stockreports+</a></li>
            <li><a href="" className="text-decoration-none">GTT</a></li>
          </ul>
        </div>
      </div>
      <div className="row p-5">
        <div className="col-4 ">
          <h1 className="fs-4 mb-5"><i class="fa-solid fa-credit-card"></i> Funds</h1>
          <ul className="list-unstyled text-muted fw-medium" style={{lineHeight:"3", fontSize:"17px"}}>
            <li><a href="" className="text-decoration-none">Adding Funds</a></li>
            <li><a href="" className="text-decoration-none">Fund Withdrawal</a></li>
            <li><a href="" className="text-decoration-none">eMandates</a></li>
            <li><a href="" className="text-decoration-none">Adding Bank Accounts</a></li>
          </ul>
        </div>
        <div className="col-4 px-5">
          <h1 className="fs-4 mb-5"><i class="fa-solid fa-circle-notch"></i> Console</h1>
          <ul className="list-unstyled text-muted fw-medium" style={{lineHeight:"3", fontSize:"17px"}}>
            <li><a href="" className="text-decoration-none">Reports</a></li>
            <li><a href="" className="text-decoration-none">Ledger</a></li>
            <li><a href="" className="text-decoration-none">Portfolio</a></li>
            <li><a href="" className="text-decoration-none">60 Day Challenge</a></li>
            <li><a href="" className="text-decoration-none">IPO</a></li>
            <li><a href="" className="text-decoration-none">Referral Program</a></li>
          </ul>
        </div>
        <div className="col-4 px-5">
          <h1 className="fs-4 mb-5"><i class="fa-regular fa-circle"></i> Coin</h1>
          <ul className="list-unstyled text-muted fw-medium" style={{lineHeight:"3", fontSize:"17px"}}>
            <li><a href="" className="text-decoration-none">Understanding Mutual Funds</a></li>
            <li><a href="" className="text-decoration-none">About Coin</a></li>
            <li><a href="" className="text-decoration-none">Buying and Selling through Coin</a></li>
            <li><a href="" className="text-decoration-none">Starting an SIP</a></li>
            <li><a href="" className="text-decoration-none">Managing your Portfolio</a></li>
            <li><a href="" className="text-decoration-none">Coin App</a></li>
            <li><a href="" className="text-decoration-none">Moving to Coin</a></li>
            <li><a href="" className="text-decoration-none">Government Securities</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
