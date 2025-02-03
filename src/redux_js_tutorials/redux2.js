import { combineReducers, createStore } from "redux";

//products constatnt
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

const GET_CARD_ITEMS = "GET_CARD_ITEMS";
const ADD_CARD_ITEMS = "ADD_CARD_ITEMS";

//state
const initialProductState = {
  products: ["suger", "salt"],
  numberOfProducts: 2,
};

const initialCartState = {
  cart: ["pen"],
  numberOfProducts: 1,
};

//action

const getProduct = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};

const getCart = () => {
  return {
    type: GET_CARD_ITEMS,
  };
};

const addCart = (product) => {
  return {
    type: ADD_CARD_ITEMS,
    payload: product,
  };
};

//reducer

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    case ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CARD_ITEMS:
      return {
        ...state,
      };

    case ADD_CARD_ITEMS:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

//store

const store = createStore(productReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProduct());
store.dispatch(addProduct("tarek"));

const store2 = createStore(cartReducer);
store2.subscribe(() => {
  console.log(store2.getState());
});

store2.dispatch(getCart());
store2.dispatch(addCart("mahi"));

//!2/3 ti reducer aksate pass korte age combined kore tarpor pass korte hobe

// const rootReducer = combineReducers({
//   producR: productReducer,
//   cartR: cartReducer,
// });

// const store = createStore(rootReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(getProduct());
// store.dispatch(addProduct("tarek"));
// store.dispatch(getCart());
// store.dispatch(addCart("mahi"));
