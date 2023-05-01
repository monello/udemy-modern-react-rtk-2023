import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "cars",
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        addCar: (state, action) => {
            console.log(`details`, action);
            state.data.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            });
        },
        removeCard: (state, action) => {
            const updatedState = state.data.filter(car => car.id !== action.payload);
            state.data = updatedState;
        }
    }
});

export const carsActions = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
