import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

const App = () => {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const results = await searchImages(term);
        setImages(results);
    };

    return (
        <>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </>
    );
};

export default App;
