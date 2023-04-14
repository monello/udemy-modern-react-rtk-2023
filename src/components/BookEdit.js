import React, { useState } from 'react';
import axios from 'axios';
import useBooksContext from '../hooks/useBooksContext';

const BookEdit = ({ book, onSubmit }) => {
    const { books, setBooks } = useBooksContext();
    const [title, setTitle] = useState(book.title);

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

    const onChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id, title);
        setTitle('');
    };

    return (
        <form className='book-edit' onSubmit={handleSubmit}>
            <label>Title</label>
            <input className='input' type='text' value={title} onChange={onChange} />
            <button className='button is-primary'>Save</button>
        </form>
    );
};

export default BookEdit;
