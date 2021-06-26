import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./NestedNav.css";

export default function NestedNav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link active" to="/Conference">
                Conference Overview
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Registration">
                Registration
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Travel">
                Travel Information
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
