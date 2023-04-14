import React, { useState } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

export const App = () => {
    const [books, setBooks] = useState([]);

    const createBook = async (title) => {
        const response = await axios.post(
            'http://localhost:3500/books',
            { title }
        );

        const updatedBooks = [
            ...books,
            response.data
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
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    );
};
