import React, { useEffect } from 'react';
import axios from 'axios';
import useBooksContext from '../hooks/useBooksContext';
import BookShow from './BookShow';

const BookList = () => {
    const { books, setBooks } = useBooksContext();

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3500/books");
        setBooks(response.data);
    };

    const renderedBooks = books.map(book => <BookShow
        key={book.id}
        book={book}
    />);
    return (
        <div className='book-list'>
            {renderedBooks}
        </div>
    );
};

export default BookList;
