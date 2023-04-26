import React, { useState, useEffect } from "react";
import Button from "../components/Button";

const CounterPage = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(`Count ${count}`);
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            Count is: {count}
            <Button primary onClick={handleClick}>
                Increment
            </Button>
        </div>
    );
};

export default CounterPage;
