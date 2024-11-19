import { configureStore } from "@reduxjs/toolkit";

// import reducers
import counterReducer from "./reducers/counterReducer";
import goalReducer from "./reducers/goalReducer";
import shipReducer from "./reducers/shipReducer";

const store = configureStore({
    // Specify reducers for each state slice
    reducer: {
        // handles state change 'counter'
        counter: counterReducer,
        // handles state change for 'goal tracker'
        goals: goalReducer,
        // handles state change for 'ship tracker'
        ships: shipReducer,
    },
});

export default store;