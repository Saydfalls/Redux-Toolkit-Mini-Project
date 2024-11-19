// Import createAction function to simplify creation of action creators
import { createAction } from "@reduxjs/toolkit";

// Creating action creator functions for adding and removing ships
export const addShip = createAction('ships/addShip');
export const removeShip = createAction('ships/removeShip');

/* 
    The strings represent action types.
    It is common to prefix the action type with the feature or slice name for better organization.
    (In this case it's counter)
    Using string constants or variables is recommended for consistency and easier refactoring.
*/