import React from "react";

const Footer = () => {
  return (
    <footer
      className="border-top pt-5  border-light border-3  "
      style={{ backgroundColor: "#FBFBFB" }}
    >
      <div className="container margin mt-4 ">
        <div className="row">
          <div className="col">
            <img src=" /media/image/logo.svg" style={{ width: "75%" }} alt="" />
            <p className="fs-8 mt-3" style={{ fontSize: "12px" }}>
              © 2010 - 2026, Zerodha Broking Ltd. All rights reserved.
            </p>
            <ul className="d-flex gap-3 list-unstyled mt-3">
              <li>
                <i className="fa-brands fa-x-twitter fs-5"></i>
              </li>
              <li>
                <i className="fa-brands fa-facebook fs-5"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram fs-5"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin fs-5"></i>
              </li>
            </ul>
            <hr className="my-4 border-secondary opacity-25" />
            <ul className="d-flex gap-3 list-unstyled mt-3">
              <li>
                <i className="fa-brands fa-youtube fs-5"></i>
              </li>
              <li>
                <i className="fa-brands fa-whatsapp fs-5"></i>
              </li>
              <li>
                <i className="fa-brands fa-telegram fs-5"></i>
              </li>
            </ul>
            <div className="row text-center justify-content-center mt-4">
              <div className="col-6">
                <img
                  className="img-fluid"
                  src="/media/image/google-play-badge-light.svg"
                  alt="Google Play"
                  style={{ maxWidth: "100px" }}
                />
              </div>

              <div className="col-6">
                <img
                  className="img-fluid"
                  src="/media/image/appstore-badge-light.svg"
                  alt="App Store"
                  style={{ maxWidth: "94px" }}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <p className="fw-bold">Account</p>
            <div className="d-flex flex-column gap-2">
              <a href="#" className="footer-link">
                Open demat account
              </a>
              <a href="#" className="footer-link">
                Minor demat account
              </a>
              <a href="#" className="footer-link">
                NRI demat account
              </a>
              <a href="#" className="footer-link">
                HUF demat account
              </a>
              <a href="#" className="footer-link">
                Commodity
              </a>
              <a href="#" className="footer-link">
                Dematerialisation
              </a>
              <a href="#" className="footer-link">
                Fund transfer
              </a>
              <a href="#" className="footer-link">
                MTF
              </a>
            </div>
          </div>
          <div className="col-md">
            <p className="fw-bold">Support</p>
            <div className="d-flex flex-column gap-2">
              <a href="#" className="footer-link">
                Contact us
              </a>
              <a href="#" className="footer-link">
                Support portal
              </a>
              <a href="#" className="footer-link">
                How to file a complaint?
              </a>
              <a href="#" className="footer-link">
                Status of complaints
              </a>
              <a href="#" className="footer-link">
                Bulletin
              </a>
              <a href="#" className="footer-link">
                Circular
              </a>
              <a href="#" className="footer-link">
                Z-Connect blog
              </a>
              <a href="#" className="footer-link">
                Downloads
              </a>
            </div>
          </div>

          <div className="col-md">
            <p className="fw-bold">Company</p>
            <div className="d-flex flex-column gap-2">
              <a href="#" className="footer-link">
                About
              </a>
              <a href="#" className="footer-link">
                Philosophy
              </a>
              <a href="#" className="footer-link">
                Press & media
              </a>
              <a href="#" className="footer-link">
                Careers
              </a>
              <a href="#" className="footer-link">
                Zerodha Cares
              </a>
              <a href="#" className="footer-link">
                Zerodha.tech
              </a>
              <a href="#" className="footer-link">
                Open source
              </a>
              <a href="#" className="footer-link">
                Referral program
              </a>
            </div>
          </div>

          <div className="col-md">
            <p className="fw-bold">Quick links</p>
            <div className="d-flex flex-column gap-2">
              <a href="#" className="footer-link">
                Upcoming IPOs
              </a>
              <a href="#" className="footer-link">
                Brokerage charges
              </a>
              <a href="#" className="footer-link">
                Market holidays
              </a>
              <a href="#" className="footer-link">
                Economic calendar
              </a>
              <a href="#" className="footer-link">
                Calculators
              </a>
              <a href="#" className="footer-link">
                Markets
              </a>
              <a href="#" className="footer-link">
                Sectors
              </a>
              <a href="#" className="footer-link">
                Gift Nifty
              </a>
            </div>
          </div>

          <div style={{ fontSize: "12px" }} className="text-secondary mt-5">
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154,
              4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
              4th Phase, Bengaluru - 560078, Karnataka, India. For any
              complaints pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>

            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>
            <p>
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </p>
            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>
              India's largest broker based on networth as per NSE. NSE broker
              factsheet
            </p>
            <p>
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
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here.
            </p>
            <p>
              *Customers availing insurance advisory services offered by Ditto
              (Tacterial Consulting Private Limited | IRDAI Registered Corporate
              Agent (Composite) License No CA0738) will not have access to the
              exchange investor grievance redressal forum, SEBI SCORES/ODR, or
              arbitration mechanism for such products.
            </p>
            <p>
              Fixed deposit products offered on this platform are third-party
              products (TPP) and are not Exchange traded products. These are
              offered through Blostem Fintech Private Limited. Zerodha Broking
              Limited (SEBI Registration No.: INZ000031633) is acting solely as
              a distributor for these products. Any disputes arising with
              respect to such distribution activity will not have access to SEBI
              SCORES/ODR, Exchange Investor Grievance Redressal Forum, or
              Arbitration mechanism. Fixed deposits are regulated by the Reserve
              Bank of India (RBI).
            </p>
            <div className="d-flex flex-wrap gap-3 mt-3  justify-content-center mb-4">
              <a href="#" className="footer-link">
                NSE
              </a>
              <a href="#" className="footer-link">
                BSE
              </a>
              <a href="#" className="footer-link">
                MCX
              </a>
              <a href="#" className="footer-link">
                Terms & conditions
              </a>
              <a href="#" className="footer-link">
                Policies & procedures
              </a>
              <a href="#" className="footer-link">
                Disclosure
              </a>
              <a href="#" className="footer-link">
                For investors' attention
              </a>
              <a href="#" className="footer-link">
                Investor charter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
