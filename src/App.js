import { useState } from "react";
import AnimalShow from "./AnimalShow";

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

    const renderedAnimals = animals.map((animal, index) => <AnimalShow key={index} type={animal} />);

    return <h1>
        <button onClick={handleClick}>Add Animal</button>
        {renderedAnimals}

    </h1>;
}

export default App;
