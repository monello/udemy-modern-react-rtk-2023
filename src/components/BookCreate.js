import React, { useState } from 'react';
import axios from 'axios';
import useBooksContext from '../hooks/useBooksContext';

const BookCreate = () => {
    const { books, setBooks } = useBooksContext();
    const [title, setTitle] = useState('');

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

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    };
    return (
        <div className='book-create'>
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className='input' value={title} onChange={handleChange} />
                <button className='button' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default BookCreate;
