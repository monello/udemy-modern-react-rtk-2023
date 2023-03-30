import React from "react";
import ReactDOM from "react-dom/client";

const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);

function App() {
    return <>
        <p>This should render an input that takes only numbers from 5 to 10 as input</p>
        <input
            type="number"
            min={5}
            max={10}
            style={{ border: "1px solid red" }}
        />
    </>;
}

root.render(<App />);
