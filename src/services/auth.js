import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    // The unique key that defines where the Redux store will store our cache.
    reducerPath: 'authApi',

    // The base query to request data.
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8080/users/',
    }),

    endpoints: (builder) => ({
        getAuthToken: builder.mutation({
            query: (data) => {
                return {
                    url: `token/`,
                    method: 'POST',
                    body:data.body,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                }
            }
        }),
        updateAuthToken: builder.mutation({
            query: (data) => {
                return {
                    url: `token/refresh/`,
                    method: 'POST',
                    body:data.body,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                }
            }
        }),
    })
})

export const { useGetAuthTokenMutation, useUpdateAuthTokenMutation } = authApi