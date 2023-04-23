import React from "react";
import Link from "./components/Link";

const App = () => {
    return (
        <div>
            <Link to="/accordion">Go to Accordion</Link>
            <Link to="/dropdown">Go to Dropdown</Link>
        </div>
    );
};

export default App;
