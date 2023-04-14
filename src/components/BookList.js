import React from 'react';
import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

const BookList = ({ books, onDelete, onEdit }) => {
    const value = useContext(BooksContext);

    const renderedBooks = books.map(book => <BookShow
        key={book.id}
        book={book}
        onDelete={onDelete}
        onEdit={onEdit}
    />);
    return (
        <div className='book-list'>
            {value}
            {renderedBooks}
        </div>
    );
};

export default BookList;
