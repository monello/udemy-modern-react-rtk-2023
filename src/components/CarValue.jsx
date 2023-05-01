import React from "react";
import { useSelector } from "react-redux";

const CarValue = () => {
    const totalCost = useSelector(({ cars: { searchTerm, data } }) => {
        const re = new RegExp(searchTerm, "i");

        // OPTION 1
        // const filteredCars = data.filter((car) => car.name.match(re));
        // return filteredCars.reduce(
        //     (accumulator, car) => accumulator + car.cost,
        //     0
        // );

        // OPTION 2: JS built-in chaining
        return data
            .filter((car) => car.name.match(re))
            .reduce((accumulator, car) => accumulator + car.cost, 0);
    });

    return <div className="car-value">Total Cost: ${totalCost}</div>;
};

export default CarValue;
