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
    let message = 'Bye there!';
    if (Math.random() > 0.5) {
        message = 'Hi there!';
    }
    const someNumber = 1234;
    const someBoolean = true;
    const someArray = [1, 2, 3];
    const someObject = {
        foo: "foo",
        bar: "bar"
    };
    return <>
        <h1>{message}</h1>
        <p>Some number: {someNumber}</p>
        <p>Some boolean: {someBoolean}</p>
        <p>Some array: {someArray}</p>
        {/* <p>Some object: {someObject}</p> */}
    </>;
}

// 5) Show the component on the screen
root.render(<App />);
