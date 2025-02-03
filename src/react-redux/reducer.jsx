import { INCREMENT, DECREMENT, RESET } from "./constants.jsx";

const initialCounter = {
  count: 0,
};
const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return state.count > 0 ? { ...state, count: state.count - 1 } : state;
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

export default counterReducer;
