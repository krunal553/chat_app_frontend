import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    darkMode: true,
}

export const themeSlice  =createSlice({
    name: 'theme',
    initialState: initialStateValue,
    reducers: {
        toggleTheme: (state, action) => {
            // state.darkMode = action.payload
            state.darkMode = !state.darkMode
        },
    },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer