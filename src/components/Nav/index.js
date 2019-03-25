import React from "react";
import "./style.css";
// import { prependOnceListener } from "cluster";

function Nav(props) {
  return (
    <div className="container">
      <nav className="navbar navbar-default" id="mNavbar">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
              id="toggle"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#section2">Services</a>
              </li>
              <li>
                <a href="#section3">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
