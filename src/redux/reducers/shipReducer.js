import { createReducer } from "@reduxjs/toolkit";
import { addShip, removeShip } from "../actions/shipAction";

const initialState = [];

// Create Reducer defines shipReducer
// It takes 2 states: initial state and callback function
// Callback function defines how state should update based on dispatched actions.
const shipReducer = createReducer(initialState, 
    (builder) => {
    // Using builder object to define cases for different actions inside callback function
        builder
        .addCase(addShip, (state, action) => { // addCase method to define state updates when actions are dispatched
            state.push(action.payload);
        })
        .addCase(removeShip, (state, action) => {
            return state.filter((ship) => ship.id !== action.payload.id);
        });
});

export default shipReducer;