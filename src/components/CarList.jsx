import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { carsActions } from "../store";

const CarList = () => {
    const dispatch = useDispatch();

    const { cars, name } = useSelector(
        ({ form, cars: { searchTerm, data } }) => {
            const re = new RegExp(searchTerm, "i");
            const filteredcars = data.filter((car) => car.name.match(re));
            return {
                cars: filteredcars,
                name: form.name,
            };
        }
    );

    const handleCarDelete = (car) => {
        dispatch(carsActions.removeCar(car.id));
    };

    const renderedCars = cars.map((car) => {
        const isBold =
            name && car.name.toLowerCase().includes(name.toLowerCase());
        return (
            <div key={car.id} className={`panel ${isBold && "bold"}`}>
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
        );
    });

    return (
        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    );
};

export default CarList;
