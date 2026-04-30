import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      className=" navbar navbar-expand-lg border-bottom  "
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2 margin">
        <div>
          <Link className="navbar-brand" to="/">
            <img
              src="/media/image/logo.svg"
              style={{ width: "145px" }}
              alt="Logo"
            />
          </Link>
        </div>
<div>
  

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0 gap-4">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/support">
                  Support
                </Link>
              </li>
              <li>
                <i className="fa-solid fa-bars m-auto mt-2 fs-4"></i>
              </li>
            </ul>
          </form>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
