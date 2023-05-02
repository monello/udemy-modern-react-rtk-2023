import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';
import { addUser } from '../thunks/addUser';

const usersSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    // extraReducers is a space to add "listeners" to actions that will be dispatched, but
    //   we didn't manually add them to the reducers section of this slice
    // AsyncThunks are a good example of actions that will be dispatched but are dfeined outside this slice
    //   pending, fullfilled, rejected
    extraReducers: (builder) => {
        // FETCH USERS CASES
        // builder.addCase('users/fetch/pending'); can be written as builder.addCase(fetchUsers/pending)
        // RTK adds these properties on for us so we do not have to type the string version manually
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            // NOTE: Whatever is being returned from the async thunk (in this case fetchUsers) will be assigned to the action.payload
            // The full action argument will be: {type: 'users/fetch/fullfilled, payload: [--- this will containe the data ---]}
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            // in the case of a rejected async thunk the error being returned will be assigned to action.error
            state.error = action.error;
        });

        // ADD USER CASES
        builder.addCase(addUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export const usersReducer = usersSlice.reducer;
