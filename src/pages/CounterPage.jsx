import React, { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT = "increment";
const DECREMENT = "dencrement";
const ADD_VALUE = "add-value";

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case ADD_VALUE:
            return {
                ...state,
                valueToAdd: action.payload,
            };
        default:
            return state;
    }
};

const CounterPage = ({ initialCount }) => {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0,
    });
    console.log(state);
    const increment = () => {
        dispatch({
            type: INCREMENT,
        });
    };

    const decrement = () => {
        dispatch({
            type: DECREMENT,
        });
    };

    const handleChange = (event) => {
        // const value = parseInt(event.target.value) || 0;
        // const value = Number(event.target.value);
        const value = +event.target.value;
        dispatch({
            type: ADD_VALUE,
            payload: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
    };

    return (
        <Panel className="m-3">
            VALUE TO ADD: {state.valueToAdd}
            <h1 className="text-lg">Count is: {state.count}</h1>
            <div className="flex flex-row">
                <Button success onClick={increment}>
                    Increment
                </Button>
                <Button danger onClick={decrement}>
                    Decrement
                </Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="number">Add a lot!</label>
                <input
                    type="number"
                    name="number"
                    id="numer"
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                    value={state.valueToAdd || ""}
                    onChange={handleChange}
                />
                <Button primary>Add it</Button>
            </form>
        </Panel>
    );
};

export default CounterPage;
