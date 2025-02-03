import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

//products constatnt
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

//state
const initialProductState = {
  products: ["suger", "salt"],
  numberOfProducts: 2,
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

//store

const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProduct());
store.dispatch(addProduct("tr"));
