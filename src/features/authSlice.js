import { createSlice } from '@reduxjs/toolkit'
import jwt_decode from 'jwt-decode';
import { useGetAuthTokenMutation } from '../services/auth'

const initialStateValue = {
    authTokens: localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null,
    user: localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialStateValue,
    reducers: {
        loginUser: (state, action) => {
            console.log("action.payload = ", action.payload)
        },
    },
})

export const { loginUser } = authSlice.actions

export default authSlice.reducer