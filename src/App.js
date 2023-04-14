import React from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

export const App = () => {
    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    );
};
