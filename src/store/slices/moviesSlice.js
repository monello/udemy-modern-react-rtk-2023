import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const moviesSlice = createSlice({
    name: "movie",
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload);
        },
        removeMovie(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    },
    extraReducers: (builder) => {
        // remember in contxt of the extraReducers just calling `reset` id the same as calling `reset.toString()`
        builder.addCase(reset, (state, action) => {
            // now the cool thing here is that because we are inside the slice the state will now refer to the "song" slice
            return [];
        });
    }
});

export const movieActions = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
