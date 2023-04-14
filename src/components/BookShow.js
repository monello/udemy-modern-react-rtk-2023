import React, { useState, useContext } from 'react';
import axios from 'axios';
import BooksContext from '../context/books';
import BookEdit from './BookEdit';

const BookShow = ({ book }) => {
    const { books, setBooks } = useContext(BooksContext);
    const [showEdit, setShowEdit] = useState(false);

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

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };

    const handleShowEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = (id, title) => {
        setShowEdit(false);
        editBookById(id, title);
    };

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit
            book={book}
            onSubmit={handleSubmit}
        />;
    }

    return (
        <div className='book-show'>
            <img
                alt='books'
                src={`https://picsum.photos/seed/${book.id}/300/200`}
            />
            <div>{content}</div>
            <div className='actions'>
                <button className='edit' onClick={handleShowEditClick}>
                    Edit
                </button>
                <button className='delete' onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default BookShow;
