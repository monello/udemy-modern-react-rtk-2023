import { useState, useEffect } from "react";

export const useCounter = (initialCount) => {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(`Count ${count}`);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };

    return { count, increment };
};
