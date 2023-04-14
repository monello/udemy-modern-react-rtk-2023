import React, { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

const BookList = ({ onDelete, onEdit }) => {
    const { books, setBooks } = useContext(BooksContext);

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
        onDelete={onDelete}
        onEdit={onEdit}
    />);
    return (
        <div className='book-list'>
            {renderedBooks}
        </div>
    );
};

export default BookList;
