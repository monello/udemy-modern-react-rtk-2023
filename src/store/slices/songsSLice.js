import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
        },
        removeSong(state, action) {
            // remember inside a slice the state refers only to the part of the state being managed by this slice
            // this means state = songs NOT state.songs in this case
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
    },
    extraReducers: (builder) => {
        // remember in contxt of the extraReducers just calling `reset` id the same as calling `reset.toString()`
        builder.addCase(reset, (state, action) => {
            // now the cool thing here is that because we are inside the slice the state will now refer to the "song" slice
            return [];
        });
    }
});

export const songActions = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
