import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from "@faker-js/faker";

// TODO: REMOVE - DEV ONLY!
const pause = (duration) => {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    });
};

const albumsApi = createApi({
    // "reducerPath" defines the name of this slice when it is added to the main store/state
    reducerPath: 'albums',

    // "basequery" will hold a pre-configured version of `fetch`, it gets this by calling "fetchBaseQuery()". In other words: the baseQuery for fetch, the fetchBaeQuery
    // If we decided to use axios we would have called it axiosBaseQuery
    baseQuery: fetchBaseQuery({
        // "baseUrl" tella the fetch api where our api is running.
        // The is the front-part of the URL that will be on ALL requests in thos createAPI
        // For eaxample if our api was at "http://localhost:3005/api/v1" this would be out baseUrl for all other requests
        baseUrl: 'http://localhost:3005',
        // This is an example of how you can override the default fetch function when using RTKQ
        // This is a handye technique if you want to "hook" into the fetch functionality and run some custom actions before or after the fetch function
        // Note that is will apply to ALL the endpoints listed in this api conofiguration
        fetchFn: async (...args) => {
            // TODO REMOVE WHNEN NOT IN DEV MODE ANYMORE
            await pause(1000);
            // call the default fetch function
            return fetch(...args);
        }
    }),
    endpoints: (builder) => ({
        // If we want to create an endpoint that will only be fetching/reading data from our API, we craete a "builder.query"
        // If we want to create an endpoint that will change (mutate) data on our API we create a "bulder.mutate"
        fetchAlbums: builder.query({
            // > Tags can be hardcoded string like on the next line
            // providesTags: ['fetchAlbums'],
            // > We need our tags to be dynamic and include the user-id (user that owns the albums being fetched)
            // > Fortunately the tags do not have to be strings, the can be anything, and using an object makes sense
            // > RTKQ profives a function-style we can use to generate our Tags
            // > The function gets the following argument automatically
            // result, error, args
            // > We are interested in the args, because that would be exactly the same parameter that is being passed to the "query" property below
            // > we can name these property anything we want so it makes sense to name it either "user" or immediately destrure it as we do in the "query" property
            // > The underscore is a TS convention to say "we know we are getting these props, but we won't be using them"
            providesTags: (_result, _error, { id }) => {
                // return an array with the tag now as an object
                // {id: id} can be shortened to {id}
                return [{ type: 'fetchAlbums', id }];
            },
            query: ({ id }) => ({
                // The "method" tell fetch to create a `fetch.get()` request type. It will add the baseUrl as the url to call: fetch.get('http://localhost:3005')
                method: 'GET',

                // The "url" is the path-part of the url. It get appended to the baseUrl (defined above). So now we have this: fetch.get('http://localhost:3005/albums')
                url: '/albums',

                // The "params" is used to build up the query-string part of the URL. Finally we have: fetch.get('http:/ocalhos:3005/albums?userId=123')
                // Id we supply multiple properties in the params object they will be added with "&foo=xxx&bar=yyy" etc
                params: {
                    userId: id
                }
            })
        }),
        addAlbum: builder.mutation({
            // See the notes on generating dynamic tags in the "providesTags" enpoint above
            // invalidatesTags: ['fetchAlbums'],
            // We need to generate the same dynamic tag here to invalidate it properly
            invalidatesTags: (_result, _error, { id }) => {
                return [{ type: 'fetchAlbums', id }];
            },
            query: ({ id }) => ({
                method: 'POST',
                url: '/albums',
                body: {
                    userId: id,
                    title: faker.commerce.productName()
                }
            })
        }),
        removeAlbum: builder.mutation({
            query: ({ id }) => ({
                method: 'DELETE',
                url: `/albums/${id}`
            })
        })
    })
});

// Here is the cool part. The following hook is automatically generate for us by RTH Query
// The name of the hook id built up from 2 parts of the config we provided above:
//  - "FetchAlbums" comes from the "fetchAlbums" endpoint we created above. It starte with an uppercase letter because all hooks in React start with "use"
//  - "Query" comes from the fact that we spcified we want to craete a "builder.query"
export const {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation
} = albumsApi;
export { albumsApi };
