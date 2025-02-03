import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../react-redux/count/action";

export default function Counter() {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();
  const handleInccounter = () => {
    dispatch(incrementCounter());
  };
  const handleDeccounter = () => {
    dispatch(decrementCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };
  return (
    <div>
      <h1>counter</h1>
      <h2>count :{count}</h2>
      <button onClick={handleInccounter}>increment</button>
      <button onClick={handleDeccounter}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
