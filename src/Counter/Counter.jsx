import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions/counterAction";

const Counter = () => {
  const counter = useSelector((state => state.counter)); // useSelector accesses counter state from the redux store
  const dispatch = useDispatch(); // useDispatch accesses Redux's dispatch function

  // Define a function to handle incrementing the `counter`.
  const handleIncrement = () => {
    // Implement the logic for incrementing the `counter` here.
    dispatch(increment());
  };

  // Define a function to handle decrementing the `counter`.
  const handleDecrement = () => {
    // Implement the logic for decrementing the `counter` here.
    dispatch(decrement());
  };

  return (
    <div>
      <h2>Counter Value: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
