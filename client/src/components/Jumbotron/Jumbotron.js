import React from "react";
import { Link } from "react-router-dom";


const Jumbotron = () =>
  <div className="jumbotron jumbotron-fluid bg-dark text-light">
    <h1 className="text-center">
      <strong>
        <i className="fa fa-newspaper-o"></i> New York Times Search</strong>
    </h1>
    <br/>
    <ul className="nav justify-content-center bg-dark">
      <li className="nav-item">
        <Link
          to="/"
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }
        >
          Home
      </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/saved"
          className={
            window.location.pathname === "/saved" ? "nav-link active" : "nav-link"
          }
        >
          Saved
      </Link>
      </li>
    </ul>
  </div>



export default Jumbotron;