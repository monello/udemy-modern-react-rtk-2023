import React, { useState } from 'react';

const Examples = () => {
    const [colors, setColors] = useState(['red', 'blue']);
    const [books, setBooks] = useState([
        { id: 1, title: 'The Gunslinger' },
        { id: 2, title: 'The Drawing Of The Three' },
        { id: 3, title: 'The Wastelands' },
        { id: 4, title: 'Wizard and Glass' },
        { id: 5, title: 'The Wind Through The Keyhole' },
        { id: 6, title: 'The Wolves Of The Calla' },
        { id: 7, title: 'Song Of Susannah' },
        { id: 8, title: 'The Dark Tower' },
    ]);

    const addToArrayStart = () => {
        const newColor = "green";
        const updatedColors = [
            newColor,
            ...colors
        ];
        setColors(updatedColors);
    };

    const addToArrayEnd = () => {
        const newColor = "purple";
        const updatedColors = [
            ...colors,
            newColor
        ];
        setColors(updatedColors);
    };

    const addToArrayMiddle = () => {
        const newColor = "black";
        const index = 2;
        const updatedColors = [
            // slice elements from 0 to index (excluding index)
            ...colors.slice(0, index),
            newColor,
            // slice elements from index (including index) to the end of the array
            ...colors.slice(index)
        ];
        setColors(updatedColors);
    };

    const removeElement = () => {
        const targetColor = 'black';
        const updatedColors = colors.filter(color => color !== targetColor);
        setColors(updatedColors);
    };

    const removeElementByIndex = () => {
        const targetIndex = 1;
        const updatedColors = colors.filter((_, index) => index !== targetIndex);
        setColors(updatedColors);
    };

    const updateObjectInArray = () => {
        const bookId = 5;
        const updatedTitle = "The Wind Through The Keyhole - Book 4.5";
        const updatedBooks = books.map(book => {
            if (book.id === bookId) {
                return {
                    ...book,
                    title: updatedTitle
                };
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    return (
        <>
            <div>Colors Array: {colors.join(' | ')}</div>
            <button onClick={addToArrayStart}>Add "green" to Front</button>
            <button onClick={addToArrayEnd}>Add "purple" to End</button>
            <button onClick={addToArrayMiddle}>Add "black" to Middle</button>
            <button onClick={removeElement}>Remove "black"</button>
            <button onClick={removeElementByIndex}>Remove "red" by index</button>
            <hr />
            <ul>
                {books.map(book => <li>{book.id}: {book.title}</li>)}
            </ul>
            <button onClick={updateObjectInArray}>Update Wind tt Keyhole title</button>
        </>
    );
};

export default Examples;
