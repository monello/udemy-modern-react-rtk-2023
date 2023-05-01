import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "cars",
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        addCar: (state, action) => {
            console.log(`details`, action);
            state.cars.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            });
        },
        removeCard: (state, action) => {
            const updatedState = state.cars.filter(car => car.id !== action.payload);
            state.cars = updatedState;
        }
    }
});

export const carsActions = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
