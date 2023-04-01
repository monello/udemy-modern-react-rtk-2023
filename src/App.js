import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        console.log("Button Clickied");
        setCount(count + 1);
    };
    return <h1>
        <button onClick={handleClick}>Add Animal</button>
        <p>Animals to show: {count}</p>
    </h1>;
}

export default App;
