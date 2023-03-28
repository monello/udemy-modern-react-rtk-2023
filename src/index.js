// 1) Import the React and ReactDOM libraries
// - The React library defines what a component is and how multiple components work together
import React from "react";
// - ReactDOM library that knows how to get a component to show up in a browser
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with the id "root"
const rootEl = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(rootEl);

// 4) Create as component
function App() {
    return <>
        <h1>Hi there!</h1>
        <p>Some aditional text</p>
    </>;
}

// 5) Show the component on the screen
root.render(<App />);
