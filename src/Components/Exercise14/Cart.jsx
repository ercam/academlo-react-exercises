import React from "react";
import store from "../../redux/store";
import { deleteProduct } from "../../redux/shopActions";

const Cart = () => {
  const { cart, total } = store.getState().shopReducer;
  console.log(store.getState());
  return (
    <div className="cart">
      {cart.map((element) => {
        return (
          <div key={element.id}>
            <img src={element.imgUrl} alt={element.name} />
            <span className="name">{element.name}</span>
            <span className="count">x{element.count}</span>
            <button className="remove" onClick={() => store.dispatch(deleteProduct(element.id))}><i className="material-icons">remove_circle</i></button>
          </div>
        );
      })}
      <div className="total-price">
        <p>Precio Total: <span>${total}</span></p>
      </div>
    </div>
  );
}

export default Cart