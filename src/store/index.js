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
        },
        reset(state, action) {
            // you cannot do this: state = [], because this does not mutate the state, it re-assigns it and immer only works when mutating state
            return [];
        }
    },
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
        // we could also use "songSlice.actions.reset.toString()", below, because that gives us the extact string we want: 'songs/reset'
        // However, seeing as this is such an often used pattern RTK allows us to leave off the .toString() as a convenience
        builder.addCase(songsSlice.actions.reset, (state, action) => {
            // note that we are listing for a call to the reset action on the SONGS slice due to passing the action type "song/reset".
            // the state here now refers to SONGS not movies even though this reducer is defined in the
            // moviesSlice
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
