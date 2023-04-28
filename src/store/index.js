import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
        },
        removeSong(state, action) {
            //
        }
    }
});


const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
    }
});


// EXAMPLES OF HOW YOU CAN MAUALLY INTERACT WITH THE STORE
// (usually only done this way for debugging purposes)

// example of how to get the data in the store
const startingState = store.getState();
console.log(startingState);

// example of how to update something in the store
// store.dispatch({
//     type: 'song/addSong',
//     payload: 'New Song'
// });
// The above is a very manual way to dispatach that action
// RTK makes this easier for so be don't have to remember those action-type keys ('song/addSong' etc)
// we can just call the action with the same name as we gave in in our slice, but we have to do it this way...
store.dispatch(songsSlice.actions.addSong('New Song'));
const updatedState = store.getState();
console.log(updatedState);
