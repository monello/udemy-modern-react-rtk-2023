import React from 'react';

const SearchBar = ({ onSubmit }) => {
    const handleClick = () => {
        const term = document.getElementById('term').value;
        onSubmit(term);
    };

    return (
        <div>
            <input type='text' id='term' />
            <button onClick={handleClick}>Search</button>
        </div>
    );
};

export default SearchBar;
