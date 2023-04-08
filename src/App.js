import React, { useState } from 'react';
import BookCreate from './components/BookCreate';

export const App = () => {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            title
        ];
        setBooks(updatedBooks);
    };

    const booksList = books.map((book, index) => <li key={index}>{book}</li>);

    return (
        <>
            <div>Books App</div>
            {!!books.length && <><h1>Books</h1><ul>{booksList}</ul></>}
            <BookCreate onCreate={createBook} />
        </>
    );
};
