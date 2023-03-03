import React from "react";
import "../../css/Accesories/Navbar.css";
import { NavLink } from "react-router-dom";
import barsIcon from "../../svg/bars.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img src="/img/linux.png" alt="linuxtec" className="navbar-icon" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={barsIcon} alt="bars" className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Inicio
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Distros
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="debian">
                    Debian
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="rpm">
                    RPM
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="arch">
                    Arch
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                FAQ
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="faq#history">
                    Historia
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="faq#whatis">
                    ¿Qué es linux?
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="faq#characteristics">
                    Características
                  </NavLink>
                </li>

                <li>
                  <NavLink className="dropdown-item" to="faq#advantages">
                    Ventajas - Desventajas
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
