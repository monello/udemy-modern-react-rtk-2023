import { createSlice } from "@reduxjs/toolkit";
import { carsActions } from "./carsSLice";

const formSlice = createSlice({
    name: "form",
    initialState: {
        name: '',
        cost: 0
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        },
        changeCost: (state, action) => {
            state.cost = action.payload;
        }
    },
    extraReducers: (builder) => {
        // listen for the addCar action on carsSlice and perform addititional state updates whne it is called
        // It is best practice to supply the action rather than manually tying th action-typ string that we are listening for
        // so use carsActions.adcar instead of the string `cars/RemoveCar`
        // When an action is called without parenthesis (not executed) it return the action creator (string of the action type key)
        // The CASE will now be executed when ever the carsAction.addCar is executed, thereby clearing the state valus for car name and cost end therfore clearing the form
        builder.addCase(carsActions.addCar, (state, action) => {
            state.name = '';
            state.cost = 0;
        });
    }
});

export const formActions = formSlice.actions;
export const formReducer = formSlice.reducer;
