import React from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

const App = () => {
    const handleSubmit = (term) => {
        console.log("Do a search with the tern", term);
        // searchImages(term)
    };

    return (
        <>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList />
        </>
    );
};

export default App;
