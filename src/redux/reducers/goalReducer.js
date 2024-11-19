import { createReducer } from "@reduxjs/toolkit";
import { addGoal, removeGoal } from "../actions/goalAction";

const initialState = [];

// Create Reducer defines goalReducer
// It takes 2 states: initial state and callback function
// Callback function defines how state should update based on dispatched actions.
const goalReducer = createReducer(initialState, 
    (builder) => {
    // Using builder object to define cases for different actions inside callback function
        builder
        .addCase(addGoal, (state, action) => { // addCase method to define state updates when actions are dispatched
            state.push(action.payload);
        })
        .addCase(removeGoal, (state, action) => {
            return state.filter((goal) => goal.id !== action.payload.id);
        });
});

export default goalReducer;