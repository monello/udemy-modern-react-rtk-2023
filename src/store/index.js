import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersReducer } from './slices/usersSlice';
import { albumsApi } from './apis/albumsApi';
import { photosApi } from './apis/photosApi';

export const store = configureStore({
    reducer: {
        users: usersReducer,
        //  > Could write the following line and it would work fine
        // albums: albumsApi.reducer,
        // > However we can achieve the same by creating the "ablums" property name dynamically
        // > Before we do this, remeber that there are two ways to access properties in a object:
        // object.propName
        // object['propName']  (OR)  object[SomeVariableThatWillReturnThePropname]   <<== this last option is handy if the property name depends on something (is dynamic)
        // > We can use the same "dynamic" property name technique when we create the new property in our state
        [albumsApi.reducerPath]: albumsApi.reducer, // this is equivalant to:    albums: albumsApi.reducer
        [photosApi.reducerPath]: photosApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumsApi.middleware) // .concat() is used to merge 2 arrays
            .concat(photosApi.middleware);
    }
});

// This is a one-time setup (after your first RTKQ API)
setupListeners(store.dispatch);

/**
 * This section contains all our re-exports to we are able to import everything related to our store from this one index.js file.
 * Basically keeping our imports tidy and craeting a convention where we know that we can import anything  related to the store from this file
 */
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
export {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation
} from './apis/albumsApi';
export {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation
} from './apis/photosApi';
