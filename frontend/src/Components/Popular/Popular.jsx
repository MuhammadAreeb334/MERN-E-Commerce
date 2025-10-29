import React from "react";
import "./Popular.css";
import data_product from "../../assets/data.js";
import Items from "../Items/Items";

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular_items">
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

export default Popular;
