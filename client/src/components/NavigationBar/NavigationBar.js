import React, { Component } from "react";
import { Link } from "react-router-dom";
// import NavLinks from "./NavLinks";
import "./NavigationBar.css";
import NavLinks from "./NavLinks";

export default class NavigationBar extends Component {

  render(){

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
        <h3>You Goal: 
          <br></br>
          Rotten Tomatoes of FIFA</h3>
        </Link>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <span className="glyphicon glyphicon-hand-left"></span>
                &nbsp;&nbsp;Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                <span className="glyphicon glyphicon-user"></span>
                &nbsp;&nbsp;Sign Up
              </Link>
            </li>
            <NavLinks />
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <span className="glyphicon glyphicon-sunglasses"></span>
                &nbsp;&nbsp;About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/getsupport">
                <span className="glyphicon glyphicon-phone-alt"></span>
                &nbsp;&nbsp;Get Support
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}