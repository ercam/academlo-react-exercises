export const carrito = (id) => ({
    type: "ADDTOCAR",
    payload: id
  });
  
  export const deleteProduct = (index) => ({
    type: "DELETE_PROD",
    payload: index
  });
  
  export const toggleCart = () => {
    return {
      type: "TOGGLE_CART"
    };
  };