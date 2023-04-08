import React, { useState } from 'react';
import BookCreate from './components/BookCreate';

export const App = () => {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            {
                id: Math.floor(Math.random() * 99999),
                title
            }
        ];
        setBooks(updatedBooks);
    };

    const booksList = books.map(({ id, title }) => <li key={id}>({id}) - {title}</li>);

    return (
        <>
            <div>Books App</div>
            {!!books.length && <><h1>Books</h1><ul>{booksList}</ul></>}
            <BookCreate onCreate={createBook} />
        </>
    );
};
