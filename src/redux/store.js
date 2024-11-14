import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";

const store = configureStore({
    // Specify reducers for each state slice
    reducer: {
        // 'counterReducer' handles state change
        counter: counterReducer,
    },
});

export default store;