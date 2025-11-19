import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("shop");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Shop", key: "shop", path: "/" },
    { label: "Men", key: "mens", path: "/mens" },
    { label: "Women", key: "womens", path: "/womens" },
    { label: "Kids", key: "kids", path: "/kids" },
  ];

  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Shopper logo" />
        <p>SHOPPER</p>
      </div>

      <div
        className="mobile-menu-icon"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <ul
        className={`nav-menu ${isMobileMenuOpen ? "mobile-menu-active" : ""}`}
      >
        {menuItems.map(({ label, key, path }) => (
          <li
            key={key}
            className={activeMenu === key ? "active" : ""}
            onClick={() => {
              setActiveMenu(key);
              setIsMobileMenuOpen(false);
            }}
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
          <span className="nav-cart-count">{getTotalCartItems()}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
