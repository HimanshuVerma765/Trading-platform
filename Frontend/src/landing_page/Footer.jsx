import React from "react";

const Footer = () => {
  return (
    <footer className="mt-5 border-top border-2 bg-light ">
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} alt="" />
            <p>
              &copy; 2010 - 2025, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
          </div>
          <div className="col">
            <p>Account</p>
            <a href="" className="text-decoration-none text-muted">
              Open demat account
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Minor demat account
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              NRI demat account
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Commodity
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Dematerialisation
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Fund transfer
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              MTF
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Referral program
            </a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="" className="text-decoration-none text-muted">
              Contact us
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Support portal
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              How to file a complaint?
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Status of your complaints
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Bulletin
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Circular
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Z-Connect blog
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Downloads
            </a>
            <br />
          </div>
          <div className="col">
            <p>Company</p>
            <a href="" className="text-decoration-none text-muted">
              About
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Philosophy
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Press & media
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Careers
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Zerodha Cares (CSR)
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Zerodha.tech
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Open source
            </a>
            <br />
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <p className="text-muted" style={{ fontSize: "11px" }}>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India. For any complaints pertaining to
            securities broking please write to
            <span>
              <a href="" className="text-decoration-none">
                complaints@zerodha.com,
              </a>
            </span>
            for DP related to
            <span>
              <a href="" className="text-decoration-none">
                dp@zerodha.com
              </a>
            </span>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p className="text-muted" style={{ fontSize: "11px" }}>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please{" "}
            <span>
              <a href="" className="text-decoration-none">
                create a ticket here.
              </a>
            </span>
          </p>
          <p className="text-muted" style={{ fontSize: "11px" }}>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
        </div>
        <div className="row mb-3" style={{ fontSize: "12px" }}>
          <div className="col-1"></div>
          <div className="col-10">
            <ul className="list-unstyled d-flex gap-5">
              <li className="text-secondary fw-semibold">NSE</li>
              <li className="text-secondary fw-semibold">BSE</li>
              <li className="text-secondary fw-semibold">MCX</li>
              <li className="text-secondary fw-semibold">Terms & Conditions</li>
              <li className="text-secondary fw-semibold">
                Policies & Procedures
              </li>
              <li className="text-secondary fw-semibold">Privacy Policy</li>
              <li className="text-secondary fw-semibold">Disclosure</li>
              <li className="text-secondary fw-semibold">
                For investor's attention
              </li>
              <li className="text-secondary fw-semibold">Investor charter</li>
            </ul>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
