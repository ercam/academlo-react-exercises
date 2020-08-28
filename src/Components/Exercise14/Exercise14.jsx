import React from "react";
import Shop from "./Shop";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Product from "./Product";
import store from "../../redux/store";
import { toggleCart } from "../../redux/shopActions";
import "./styles.css";

const Exercise14 = () => {
  const { shopReducer } = store.getState();
  const products = shopReducer.products;

  return (
    <div className="App">
      <Navbar>
        <button 
        className="cart-button"
        onClick={() => store.dispatch(toggleCart())}><i className="material-icons">shopping_cart</i></button>
        {shopReducer.toggleCart ? <Cart /> : null}
      </Navbar>
      <Shop>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </Shop>
    </div>
  );
}

export default Exercise14