import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

// Note the more generic action-type name for this reset action, it starte with "app" and nor a slice name
// if you were not to call this action and log the response: `console.log(reset())` you'll get this `{type: "app/reset", payload: undefined}`
// in other words a proper action-craetor object
// and `console.log(reset.toString())` will output "app/reset"
// Also note that we manually export the action here so we can import it in a component
export const reset = createAction('app/reset');

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

export const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer,
    }
});

export const songActions = songsSlice.actions;
export const movieActions = moviesSlice.actions;
