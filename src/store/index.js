import { configureStore } from "@reduxjs/toolkit";
import { formReducer, formActions } from "./slices/formSlice";
import { carsReducer, carsActions } from "./slices/carsSLice";

const store = configureStore({
    reducer: {
        form: formReducer,
        cars: carsReducer
    }
});

export { store, formActions, carsActions };
