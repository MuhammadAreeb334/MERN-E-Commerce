import React from "react";
import "./RelatedProduct.css";
import data_product from "../../assets/data";
import Items from "../Items/Items.jsx";

const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-items">
        {data_product.map((items, key) => {
          return (
            <Items
              key={key}
              id={items.id}
              name={items.name}
              image={items.image}
              new_price={items.new_price}
              old_price={items.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
