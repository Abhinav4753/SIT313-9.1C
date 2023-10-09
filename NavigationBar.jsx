import React from "react";
import { Outlet, Link } from "react-router-dom";
import './NavigationBar.css';

function NavigationBar() {
  return (
    <div className="navbar">
      <p className="header">Dev@Deakin</p>
      <div className="link-container">
        <Link className="link" to="/Login">
          Login
        </Link>
        <Link className="link" to="/Signup">
          Signup
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default NavigationBar;
