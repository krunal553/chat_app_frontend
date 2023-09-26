import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const messageApi = createApi({
    // The unique key that defines where the Redux store will store our cache.
    reducerPath: 'messageApi',

    // The base query to request data.
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8080/chat/',
    }),

    endpoints: (builder) => ({
        getChatMessages: builder.query({
            query: (data) => {
                return {
                    url: `messages/${data.id}/`,
                    method: 'GET',
                    headers: {
                        'Authorization': "Bearer "+ String(data.token)
                    }
                }
            }
        }),
        clearChatMessages: builder.mutation({
            query: (data) => {
                return {
                    url: `messages/${data.id}/`,
                    method: 'PATCH',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Authorization': "Bearer "+ String(data.token)
                    }
                }
            }
        }),
        createMessage: builder.mutation({
            query: (data) => {
                console.log("new message", data.newMessage)
                return {
                    url: `messages/`,
                    method: 'POST',
                    body: data.newMessage,
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': "Bearer "+ String(data.token)
                    }         
                }
            }
        }),
    })
})

export const { useGetChatMessagesQuery, useCreateMessageMutation, useClearChatMessagesMutation} = messageApi