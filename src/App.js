import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css';

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

    return <div className="app">
        <button onClick={handleClick}>Add Animal</button>
        <div className="animal-list">{renderedAnimals}</div>
    </div>;
}

export default App;
