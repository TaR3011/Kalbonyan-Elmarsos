import React, { useContext } from "react";

import Card from "../UI/Card";
import "./ProductItem.css";
import { toggleFav } from "../../store/actions/products";
import { useStore } from "../../hooks-store/store"; // import { ProductContext } from "../../context/products-context";

const ProductItem = React.memo((props) => {
  console.log("Rendring");
  const dispatch = useStore(false)[1];
  // const toggleFav = useContext(ProductContext).toggleFav;

  const toggleFavHandler = () => {
    // toggleFav(props.id);
    dispatch("TOGGLE_FAV", props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
