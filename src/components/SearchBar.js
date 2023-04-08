import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('');

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type='text' value={term} onChange={handleChange} />
            </form>
        </div>
    );
};

export default SearchBar;
