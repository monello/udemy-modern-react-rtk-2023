import { configureStore, createSlice } from "@reduxjs/toolkit";

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
        }
    }
});

export const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
    }
});

export const songActions = songsSlice.actions;
