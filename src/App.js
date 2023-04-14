import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import BooksContext from './context/books';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

export const App = () => {
    const { books, setBooks } = useContext(BooksContext);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3500/books");
        setBooks(response.data);
    };

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3500/books/${id}`);

        const updatedBooks = books.filter(book => book.id !== id);
        setBooks(updatedBooks);
    };

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3500/books/${id}`, {
            title: newTitle
        });

        const updatedBooks = books.map(book => {
            if (book.id === id) {
                return {
                    ...book,
                    ...response.data
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
            <BookCreate />
        </div>
    );
};
