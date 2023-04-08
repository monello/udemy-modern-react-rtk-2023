import React from 'react';
import ShowImage from './ShowImage';

const ImageList = ({ images }) => {
    const renderedImages = images.map(image => <ShowImage key={image.id} image={image} />);
    return (
        <>
            {!!images.length && renderedImages}
        </>
    );
};

export default ImageList;
