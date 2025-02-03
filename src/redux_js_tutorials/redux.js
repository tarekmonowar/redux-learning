import { createStore } from "redux";

//!this is normal js redux to learn just

// Action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

// Initial state
const initialState = {
  count: 0,
};

// Action creators
const incrementCounterAction = () => ({ type: INCREMENT });
const decrementCounterAction = () => ({ type: DECREMENT });
const resetCounterAction = () => ({ type: RESET });
const INCREMENTBYVALUE = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    case INCREMENT_BY_VALUE:
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

// Create store
const store = createStore(counterReducer);

// Subscribe to store updates
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch actions
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(resetCounterAction());
store.dispatch(INCREMENTBYVALUE(12));

//*type  node .\src\redux_tutorials\redux.js in console
