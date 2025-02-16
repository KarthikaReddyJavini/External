import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => (
  <header>
    <div className="header-content">
      <img src="data:image/png;base64,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" alt="Logo" className="header-logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalogue">Catalogue</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
