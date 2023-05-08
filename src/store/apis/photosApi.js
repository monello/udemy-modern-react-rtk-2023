import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from '@faker-js/faker';

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints: (builder) => {
        return {
            fetchPhotos: builder.query({
                providesTags: (result, _error, album) => {
                    // Provide a set of tags that can be invalidated when a photo is seleted by it's photo-id
                    const tags = result.map(photo => {
                        return { type: 'Photo', id: photo.id };
                    });
                    // Provide a tag that can be invalidated when a new photo is being added to a specific album (album-id)
                    tags.push({ type: 'PhotoAlbum', id: album.id });
                    return tags;
                },
                query: (album) => ({
                    method: 'GET',
                    url: '/photos',
                    params: {
                        albumId: album.id
                    }
                })
            }),
            addPhoto: builder.mutation({
                invalidatesTags: (_result, _error, album) => {
                    // Invalidte a tag when a photo is being added to a specific album (album-id)
                    return [{ type: 'PhotoAlbum', id: album.id }];
                },
                query: (album) => ({
                    method: 'POST',
                    url: '/photos',
                    body: {
                        albumId: album.id,
                        url: faker.image.abstract(150, 150, true) // (height, width, isRandom)
                    }
                })
            }),
            removePhoto: builder.mutation({
                invalidatesTags: (_result, _error, photo) => {
                    // Create a tag to delete when a photo is being delete by it's unique id (photo-id)
                    return [{ type: 'Photo', id: photo.id }];
                },
                query: (photo) => ({
                    method: 'DELETE',
                    url: `/photos/${photo.id}`
                })
            })
        };
    }
});

export const {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation
} = photosApi;
export { photosApi };
