import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer, movieActions } from "./slices/moviesSlice";
import { songsReducer, songActions } from "./slices/songsSLice";
import { reset } from "./actions";

const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer,
    }
});

// re-export so the all imports can be done from index.js
export { store, movieActions, songActions, reset };
