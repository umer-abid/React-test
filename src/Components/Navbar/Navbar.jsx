import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="container">
      <div className="hero-img">
        <a href="/">
          <span>{`<`}</span>Back
        </a>
        <div className="nav-ul">
          <ul className="navi-ul">
            <li>Events Management</li>
            <li className="active">Congress and Exhibition</li>
            <li>Production</li>
            <li>Engagement</li>
          </ul>
        </div>
        <div className="hero-heading">
          <div className="row">
            <div className="col-12">
              <h1 className="hero-heading-h1 text-color-class">ID WEEK 2020</h1>
              <h6 className="hero-heading-h6-1 text-color-class">
                21 - 25 OCTOBER
              </h6>
              <h6 className="hero-heading-h6-2 text-color-class">
                PHILADELPHIA, PENNSYLVANIA, USA
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
