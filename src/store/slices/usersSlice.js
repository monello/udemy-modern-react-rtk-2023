import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';
import { addUser } from '../thunks/addUser';

const usersSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
    },
    // extraReducers is a space to add "listeners" to actions that will be dispatched, but
    //   we didn't manually add them to the reducers section of this slice
    // AsyncThunks are a good example of actions that will be dispatched but are dfeined outside this slice
    //   pending, fullfilled, rejected
    extraReducers: (builder) => {
        // FETCH USERS CASES
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            // state.isLoading = false;
            // NOTE: Whatever is being returned from the async thunk (in this case fetchUsers) will be assigned to the action.payload
            // The full action argument will be: {type: 'users/fetch/fullfilled, payload: [--- this will containe the data ---]}
            state.data = action.payload;
        });

        // ADD USER CASES
        builder.addCase(addUser.fulfilled, (state, action) => {
            // state.isLoading = false;
            state.data.push(action.payload);
        });
    }
});

export const usersReducer = usersSlice.reducer;
