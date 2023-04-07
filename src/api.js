import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID tUyaUjPJaxPAPs94RMmVpTtsrouATF3q5VTfmo6FJD4'
        },
        params: {
            query: 'fish'
        }
    });
    console.log(response);
    return response;
};

export default searchImages;
