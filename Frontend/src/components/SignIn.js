import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";

function Parks() {
  return (
    <div className="card" key="Park_1">
      <div className="card-body">
        <h5 className="card-title">Sign In</h5>
        <br />
        <img
          src="https://cdn.britannica.com/82/117982-050-D4295893/Frank-Sinatra-Park-Hoboken-NJ.jpg"
          alt="Park img"
          width="400"
          height="400"
        ></img>
        <br />
      </div>
    </div>
  );
}

export default Parks;
