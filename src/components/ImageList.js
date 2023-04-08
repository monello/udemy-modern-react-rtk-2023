import React from 'react';
import ShowImage from './ShowImage';

import './ImageList.css';

const ImageList = ({ images }) => {
    const renderedImages = images.map(image => <ShowImage key={image.id} image={image} />);
    return (
        <div className='image-list'>
            {!!images.length && renderedImages}
        </div>
    );
};

export default ImageList;
