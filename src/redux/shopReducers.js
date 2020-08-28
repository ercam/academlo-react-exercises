const INITIAL_STATE = {
    products: [
      {
        id: 1,
        name: "Tenis adidas",
        price: 50,
        imgUrl:
          "https://assets.adidas.com/images/w_600,f_auto,q_auto/0b9411c8634d419f84c0a9d8010d24e4_9366/Tenis_U_Path_Run_Negro_G28107_01_standard.jpg",
        description: "Tenis adidas Path Run en color negro",
        category: "Deportes"
      },
      {
        id: 2,
        name: "Remera Urban",
        price: 200,
        imgUrl:
          "https://www.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/6/4/640020852419036-1.jpg",
        description: "remera color azul",
        category: "Deportes"
      },
      {
        id: 3,
        name: "camisa adidas",
        price: 20,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnQBlr_-Bd6aoaokB4dRFZP5tb_bo2lNMDb6Xy8mDWI7o5lh7j2vChcupRB4h7sD50oJ_qP64&usqp=CAc",
        description: "camisa adidas Path Run en color gris",
        category: "Deportes"
      },
      {
        id: 4,
        name: "Short adidas",
        price: 69,
        imgUrl:
          "https://assets.adidas.com/images/w_600,f_auto,q_auto/6d8a2856a3e44e92b42da805004f50b3_9366/Shorts_Parma_16_Negro_AJ5880_01_laydown.jpg",
        description: "Shorts adidas color negro deportivos",
        category: "Deportes"
      },
      {
        id: 5,
        name: "Computadora Gamer HP",
        price: 250,
        imgUrl:
          "https://d22k5h68hofcrd.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06365240_2.png",
        description:
          "Computadora Gamer HP Pavilion color negro teclado retroiluminado",
        category: "Tecnologia"
      },
      {
        id: 6,
        name: "Gorra NIKE",
        price: 12,
        imgUrl:
          "https://www.innvictus.com/medias/IN-942212-631-1.png?context=bWFzdGVyfGltYWdlc3wxMjMzNDJ8aW1hZ2UvcG5nfGltYWdlcy9oMjEvaDFlLzkyNTMzNDMxMzM3MjYucG5nfGM4YTQ4YWYzMmI4YTJkMjE0Y2M5YzgxZmU1MTU1ZjdjNDA1ZWJlMDQ0MzJiMjc5NGI3NDkyOWJhNzY5NTNjMGI",
        description: "Gorra NIKE, color rosa, deportiva",
        category: "Deportes"
      }
    ],
    cart: [],
    toggleCart: false,
    total: 0
  };

  const total = (cart) => {
    const pricesArray = cart.map(product => product.price * product.count)
    return pricesArray.reduce((a, b) => parseInt(a) + parseInt(b))
  }

  const shopReducer = (previousState = INITIAL_STATE, action) => {
    switch (action.type) {
      case "ADDTOCAR":
        //code...
        let id = action.payload;
        const objectProduct = previousState.products.find((e) => e.id === id);
        let newCart = [];
        if(previousState.cart.some(product => product.id === id)){
          newCart = previousState.cart.map((product) =>
          product.id === id ? {...product, count: product.count + 1} : product);
        } else {
          newCart = [...previousState.cart, {...objectProduct, count: 1}]
        }
        return { ...previousState, cart: newCart, total: total(newCart) };

      case "DELETE_PROD":
        let cartCopy = [...previousState.cart];
        previousState.cart.forEach((product, i) => 
          product.id === action.payload ?
            product.count > 1 ?
              cartCopy = previousState.cart.map((product) =>
                product.id === action.payload ? {...product, count: product.count - 1} : product) 
                :
                cartCopy.splice(i, 1) 
              :  
              product
        )
        // Modificar el carrito y calcular el precio total
        if(cartCopy.length === 0){
          return { ...previousState, cart: cartCopy, total: 0 };
        } else {
          return { ...previousState, cart: cartCopy, total: total(cartCopy) };
        }

      case "TOGGLE_CART":
        return { ...previousState, toggleCart: !previousState.toggleCart };
      default:
        return previousState;
    }
  };

  export default shopReducer