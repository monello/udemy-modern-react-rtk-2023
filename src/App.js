function App() {
    const handleClick = () => {
        console.log("Button Clickied");
    };
    return <h1>
        <button onClick={handleClick}>Add Animal</button>
    </h1>;
}

export default App;
