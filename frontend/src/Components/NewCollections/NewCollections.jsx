import React from "react";
import "./NewCollection.css";
import NewCollection from "../../assets/new_collections.js";
import Items from "../Items/Items.jsx";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collections">
        {NewCollection.map((items, key) => {
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

export default NewCollections;
