// Import createAction function to simplify creation of action creators
import { createAction } from "@reduxjs/toolkit";

// Creating action creator functions for incrementing and decrementing the counter
export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');