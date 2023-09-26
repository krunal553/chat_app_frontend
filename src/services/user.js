import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    // The unique key that defines where the Redux store will store our cache.
    reducerPath: 'userApi',

    // The base query to request data.
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8080/users/',
    }),

    endpoints: (builder) => ({
        getUserProfile: builder.query({
            query: (data) => {
                return {
                    url: `${data.id}/`,
                    method: 'GET',
                    headers: {
                        'Authorization': "Bearer "+ String(data.token)
                    }
                }
            }
        }),
        searchUserProfiles: builder.query({
            query: (data) => {
                return {
                    url: `search/?query=${data.query}`,
                    method: 'GET',
                    headers: {
                        'Authorization': "Bearer "+ String(data.token)
                    }
                }
            }
        }),
    })
})

export const { useGetUserProfileQuery, useSearchUserProfilesQuery } = userApi