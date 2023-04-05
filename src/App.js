import { useState } from "react";

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse', 'fish'];
    const animal = Math.floor(Math.random() * animals.length);
    return animals[animal];
}

function App() {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };
    return <h1>
        <button onClick={handleClick}>Add Animal</button>
        <div>{animals}</div>
    </h1>;
}

export default App;
