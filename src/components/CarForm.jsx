import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store";

const CarForm = () => {
    const dispatch = useDispatch();

    const { name, cost } = useSelector((state) => ({
        name: state.form.name,
        cost: state.form.cost,
    }));

    const handleNameChange = (event) => {
        dispatch(formActions.changeName(event.target.value));
    };

    const handleCostChange = (event) => {
        const carCost = +event.target.value || 0;
        dispatch(formActions.changeCost(carCost));
    };

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add car</h4>
            <form>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input
                            className="input is-expanded"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>

                    <div className="field">
                        <label className="label">Cost</label>
                        <input
                            type="number"
                            className="input is-expanded"
                            value={cost || ""}
                            onChange={handleCostChange}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CarForm;
