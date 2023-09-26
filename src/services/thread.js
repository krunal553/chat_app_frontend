// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const threadApi = createApi({
    reducerPath: 'threadApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8080/chat/' }),
    endpoints: (builder) => ({
        getUserChatlist: builder.query({
            query: (data) => {
                return {
                    url: 'threads/',
                    method: 'GET',
                    headers: {
                        'Authorization': "Bearer "+ String(data.token)
                    }
                }
            },
        }),
        createChat: builder.mutation({
            query: (data) => {
                return {
                    url: 'threads/',
                    method: 'POST',
                    body: data.body,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Authorization': "Bearer "+ String(data.token)
                    }
                }
            },
        }),
    }),
})

export const { useGetUserChatlistQuery, useCreateChatMutation } = threadApi