import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    messages: [],
}

export const chatSlice  =createSlice({
    name: 'chat',
    initialState: initialStateValue,
    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload
        },
    },
})

export const { setMessages } = chatSlice.actions

export default chatSlice.reducer