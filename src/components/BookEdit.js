import React, { useState } from 'react';

const BookEdit = ({ book, onSubmit }) => {
    const [title, setTitle] = useState(book.title);

    const onChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, title);
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
