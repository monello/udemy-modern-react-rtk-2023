import React, { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

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

    const deleteBookById = (id) => {
        console.log("TARGET ID:", id);
        const updatedBooks = books.filter(book => book.id !== id);
        setBooks(updatedBooks);
    };

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map(book => {
            if (book.id === id) {
                return {
                    ...book,
                    title: newTitle
                };
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    return (
        <div className='app'>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    );
};
