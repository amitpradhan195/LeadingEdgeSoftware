import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [navbarToggle, setNavbar] = useState(false);
  const [isActive, setActive] = useState(false);
  const [changeBg, setChangeBg] = useState(false);

  function toggleNavbar() {
    setNavbar(!navbarToggle);
    setActive(!isActive);
  }

  const changeNavbarBg = () => {
    if (window.scrollY > 0) {
      setChangeBg(true);
    } else {
      setChangeBg(false);
    }
  };
  window.addEventListener("scroll", changeNavbarBg);

  return (
    <header
      id="header"
      className={`header fixed-top ${changeBg ? "header-scrolled" : ""}`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <img src={logo} alt="logo" />
          <span>Leading Edge Software</span>
        </a>

        <nav id="navbar" className={navbarToggle ? "navbar-mobile" : "navbar"}>
          <ul>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <i
            className={`bi ${isActive ? "bi-x" : "bi-list"} mobile-nav-toggle`}
            onClick={() => toggleNavbar()}
          ></i>
        </nav>
      </div>
    </header>
  );
}
