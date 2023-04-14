import React, { useState } from 'react';
import useBooksContext from '../hooks/useBooksContext';
import BookEdit from './BookEdit';

const BookShow = ({ book }) => {
    const { deleteBookById } = useBooksContext();
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };

    const handleShowEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = (id, title) => {
        setShowEdit(false);
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
