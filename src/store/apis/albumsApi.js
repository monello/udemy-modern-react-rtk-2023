import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const albumsApi = createApi({
    // "reducerPath" defines the name of this slice when it is added to the main store/state
    reducerPath: 'albums',

    // "basequery" will hold a pre-configured version of `fetch`, it gets this by calling "fetchBaseQuery()". In other words: the baseQuery for fetch, the fetchBaeQuery
    // If we decided to use axios we would have called it axiosBaseQuery
    baseQuery: fetchBaseQuery({
        // "baseUrl" tella the fetch api where our api is running.
        // The is the front-part of the URL that will be on ALL requests in thos createAPI
        // For eaxample if our api was at "http://localhost:3005/api/v1" this would be out baseUrl for all other requests
        baseUrl: 'http://localhost:3005'
    }),
    endpoints: (builder) => {
        return {
            // If we want to create an endpoint that will only be fetching/reading data from our API, we craete a "builder.query"
            // If we want to create an endpoint that will change (mutate) data on our API we create a "bulder.mutate"
            fetchAlbums: builder.query({
                query: (user) => {
                    return {
                        // The "method" tell fetch to create a `fetch.get()` request type. It will add the baseUrl as the url to call: fetch.get('http://localhost:3005')
                        method: 'GET',

                        // The "url" is the path-part of the url. It get appended to the baseUrl (defined above). So now we have this: fetch.get('http://localhost:3005/albums')
                        url: '/albums',

                        // The "params" is used to build up the query-string part of the URL. Finally we have: fetch.get('http:/ocalhos:3005/albums?userId=123')
                        // Id we supply multiple properties in the params object they will be added with "&foo=xxx&bar=yyy" etc
                        params: {
                            userId: user.id
                        }
                    };
                }
            })
        };
    }
});

// Here is the cool part. The following hook is automatically generate for us by RTH Query
// The name of the hook id built up from 2 parts of the config we provided above:
//  - "FetchAlbums" comes from the "fetchAlbums" endpoint we created above. It starte with an uppercase letter because all hooks in React start with "use"
//  - "Query" comes from the fact that we spcified we want to craete a "builder.query"
export const { useFetchAlbumsQuery } = albumsApi;
