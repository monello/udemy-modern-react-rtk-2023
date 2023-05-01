import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { carsActions } from "../store/slices/carsSLice";

const CarSearch = () => {
    const dispatch = useDispatch();

    const searchTerm = useSelector((state) => state.cars.searchTerm);

    const handleSearchTermChange = (event) => {
        dispatch(carsActions.changeSearchTerm(event.target.value));
    };

    return (
        <div className="list-header">
            <h3 className="title is-3">My Cars</h3>
            <div className="search field is-horizontal">
                <label className="label">Search</label>
                <input
                    type="text"
                    className="input"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
            </div>
        </div>
    );
};

export default CarSearch;
