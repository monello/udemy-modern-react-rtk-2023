import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// The first argument is a string that describes what this thunk does. It is called the "Base Type"
// If will be used to group a bunch of other actions that Redux Toolkit will be creating and dispatch for us automatically,
//     based on the STAGE that this async request is in: panding | fulfilled | rejected
// This means the base type = the stage types will generate action types like this: "users/fetch/pending" | "users/fetch/fullfilled" | "users/fetch/rejected"
// As mentioned these are generated and dispatched automatically for us by RTK
const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get("http://localhost:3005/users");
    return response.data;
});

export { fetchUsers };
