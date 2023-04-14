import React, { useEffect } from 'react';

import useBooksContext from '../hooks/useBooksContext';
import BookShow from './BookShow';

const BookList = () => {
    const { books, fetchBooks } = useBooksContext();

    useEffect(() => {
        fetchBooks();
    }, []);

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
