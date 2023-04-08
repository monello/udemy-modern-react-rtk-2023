import React from 'react';

const ShowImage = ({ image }) => {
    const { alt_description, urls } = image;
    return (
        <div>
            <img alt={alt_description} src={urls.small} />
        </div>
    );
};

export default ShowImage;
