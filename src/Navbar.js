import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ handleLogout }) => {
  return (
    <div className="hero">
      <div className="heroNav">
        <Link to="/">
          <h2>SMMS</h2>
        </Link>
        <div className="navBar__body">
          <div className="navBar__dropdown">
            <button className="navBar_btn">
              <Link to="/booking">
                <h1>Booking</h1>
              </Link>
            </button>
          </div>
          <div className="navBar__dropdown">
            <button className="navBar_btn">
              <Link to="/renting">
                <h1>Renting</h1>
              </Link>
            </button>
          </div>
          <div className="navBar__dropdown">
            <button className="navBar_btn">
              <Link to="/cancelBook">
                <h1>Cancel Booking</h1>
              </Link>
            </button>
          </div>
          <div className="navBar__dropdown">
            <button className="navBar_btn">
              <Link to="/contact">
                <h1>Contact</h1>
              </Link>
            </button>
          </div>
        </div>
        <button className="logoutBtn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      {/* <Home /> */}
    </div>
  );
};

export default Navbar;
