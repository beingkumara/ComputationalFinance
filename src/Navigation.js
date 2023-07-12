import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* <img src="https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Hom"/> */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link
          to="/"
          className="navbar-brand nav-brand-text"
          style={{ color: "#00a8e8" }}
          onClick={closeMobileMenu}
        >
          Computational Finan$e
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileMenuToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${
            isMobileMenuOpen ? "show" : ""
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto nav-tabs">
            <li className="nav-item">
              <Link to="/option" className="nav-link" onClick={closeMobileMenu}>
                Options
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/greek" className="nav-link" onClick={closeMobileMenu}>
                Greeks
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/calculator"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                Calculator
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navigation;
