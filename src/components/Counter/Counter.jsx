import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/actions/counterAction";

import styles from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter); // Access counter state from Redux
  const dispatch = useDispatch(); // Access Redux dispatch function

  // Handle incrementing the counter
  const handleIncrement = () => {
    dispatch(increment());
  };

  // Handle decrementing the counter
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className={styles["counter-card"]}>
      <h2>Counter Value: {counter}</h2>
      <div>
        <button
          className={`${styles["nice-button"]} ${styles["increment-button"]}`}
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className={`${styles["nice-button"]} ${styles["decrement-button"]}`}
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;