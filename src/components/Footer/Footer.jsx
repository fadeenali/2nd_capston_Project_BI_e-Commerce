import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-main">
        <footer className="text-center text-lg-start text-white bg-dark">
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className=" fs-4 mb-4 font-weight-bold">e-Commerce</h6>
                  <p>
                    There is always light. If only we're brave enough to see it.
                    If only we're brave enough to be it. <br />
                    You're braver than you believe, stronger than you seem, and
                    smarter than you think.  <br />
                    
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    get to know us
                  </h6>
                  <p>
                    <Link to="#" className="text-white">
                      About us
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="text-white">
                      careears{" "}
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="text-white">
                      Press Releases{" "}
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="text-white">
                      e-Commerce Cares{" "}
                    </Link>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Useful links
                  </h6>
                  <p>
                    <Link to="#" className="text-white">
                      your Account{" "}
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="text-white">
                      Become an Affiliate
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="text-white">
                      Shipping Rates
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="text-white">
                      Help
                    </Link>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact us
                  </h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> Florida, miami beach ,
                    NY 911, USA
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i>{" "}
                    contect@e-Commerce.com
                  </p>
                  <p>
                    <FaPhoneAlt /> + 91 234 567 88
                  </p>
                  <p>
                    <FaPhoneAlt /> + 91 234 567 89
                  </p>
                </div>
              </div>
            </section>

            <hr />

            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <div className="p-3">© 2022 Copyright : e-Commerce.com</div>
                </div>

                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                    <FaFacebook />
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                    <FaInstagram />
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-google"></i>
                    <FiMail />
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
