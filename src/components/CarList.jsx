import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { carsActions } from "../store";

const CarList = () => {
    const dispatch = useDispatch();

    const cars = useSelector((state) => state.cars.data);

    const handleCarDelete = (car) => {
        dispatch(carsActions.removeCar(car.id));
    };

    const renderedCars = cars.map((car) => (
        <div key={car.id} className="panel">
            <p>
                {car.name} - ${car.cost}
            </p>
            <button
                className="button is-danger"
                onClick={() => {
                    handleCarDelete(car);
                }}
            >
                Delete
            </button>
        </div>
    ));
    return (
        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    );
};

export default CarList;
