import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement } from "../actions/counterAction.js";

const initialState = 0;

// Create Reducer defines counterReducer
// It takes 2 states: initial state and callback function
// Callback function defines how state should update based on dispatched actions.
const counterReducer = createReducer(initialState,
    (builder) => {
    // Using builder object to define cases for different actions inside callback function
        builder
        .addCase(increment, (state) => state + 1) // addCase method to define state updates when actions are dispatched
        .addCase(decrement, (state) => state - 1);
});

export default counterReducer;