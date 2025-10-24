import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("shop");

  const menuItems = [
    { label: "Shop", key: "shop", path: "/" },
    { label: "Men", key: "mens", path: "/mens" },
    { label: "Women", key: "womens", path: "/womens" },
    { label: "Kids", key: "kids", path: "/kids" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Shopper logo" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        {menuItems.map(({ label, key, path }) => (
          <li
            key={key}
            className={activeMenu === key ? "active" : ""}
            onClick={() => setActiveMenu(key)}
          >
            <Link to={path} className="nav-links">
              {label}
            </Link>
            {activeMenu === key && <hr />}
          </li>
        ))}
      </ul>

      <div className="nav-login-cart">
        <Link to="/login" className="nav-links">
          <button>Login</button>
        </Link>
        <div className="cart-container">
          <Link to="/cart" className="nav-links">
            <FaShoppingCart size={28} color="#515151" />
          </Link>
          <span className="nav-cart-count">0</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
