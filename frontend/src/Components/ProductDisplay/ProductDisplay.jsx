import React, { useContext } from "react";
import "./ProductDisplay.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-display-img">
          <img
            className="product-display-mainimg"
            src={product.image}
            alt={product.name}
          />
        </div>
      </div>

      <div className="product-display-right">
        <h1>{product.name}</h1>

        <div className="product-display-right-stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <FaRegStar />
          <p>(122)</p>
        </div>

        <div className="product-display-right-prices">
          <div className="price-old">${product.old_price}</div>
          <div className="price-new">${product.new_price}</div>
        </div>

        <p className="product-display-right-description">
          {product.description ||
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment."}
        </p>

        <div className="product-display-right-size">
          <h2>Select Size</h2>
          <div className="product-display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="add-to-cart-btn"
        >
          ADD TO CART
        </button>

        <p className="product-display-right-category">
          <span>Category:</span>{" "}
          {product.category || "Women, T-Shirt, Crop Top"}
        </p>
        <p className="product-display-right-category">
          <span>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
