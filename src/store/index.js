import { configureStore } from "@reduxjs/toolkit";
import { formReducer, formActions } from "./slices/formSlice";
import { carsReducer, carsActions } from "./slices/carsSLice";
import { reset } from "./actions";

const store = configureStore({
    reducer: {
        form: formReducer,
        cars: carsReducer
    }
});

export { store, formActions, carsActions, reset };
