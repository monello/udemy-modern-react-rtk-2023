import { useState } from "react";

/*
 * These are just dummy functions to help demonstrate why useState() hook returns an array instead of an object
 * We create 2 dummy versions of useState() hook one that returns an array and one that returns an object
 * We then use it inside our App() component below to make it clear why the developers of useState() decided to return an array instead of an object
 */

const useStateReturnsArray = (initialValue) => {
    const value = initialValue;
    const setter = () => { };
    return [value, setter];
};

const useStateReturnsObject = (initialValue) => {
    return {
        value: initialValue,
        setter: () => { }
    };
};

function App() {
    // Shows that we would have to alias the returned values from an object to the names we want them to be.
    // Object properties have to be named in order to be returned as properties of an object
    // This means we have to use the names of these properties when we do object destructuring...
    // Then alias then to the names we want them to be ...
    const { value: foo, setter: setFoo } = useStateReturnsObject(0);
    const { value: bar, setter: setBar } = useStateReturnsObject(0);

    // ... seeing as useState returns an array, we can name the array element anything we want.
    // we an do this immediately during array destructuring and there is no need for aliassing
    // In summay returning an array made sense because useState() (more often than not) get used multiple times in a component
    // so it really is was just a matter of making it easier (cleaner) for developers using multiple useState() calls in one component
    const [baz, setBaz] = useStateReturnsArray(0);
    const [foop, setFoop] = useStateReturnsArray(0);

    // I just added this console log to get rid of the eslint warnings on the above code it doesn't do anything related to this demonstration
    console.log(foo, setFoo, bar, setBar, baz, setBaz, foop, setFoop);

    // const [count, setCount] = useState(0);
    // const handleClick = () => {
    //     setCount(count + 1);
    // };
    // return <h1>
    //     <button onClick={handleClick}>Add Animal</button>
    //     <p>Animals to show: {count}</p>
    // </h1>;
}

export default App;
