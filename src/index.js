import React from "react";
import ReactDOM from "react-dom/client";

const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);

function App() {
    return <h1>Hello World!</h1>;
}

root.render(<App />);
