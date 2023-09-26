import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import themeReducer from './features/themeSlice'
import authReducer from './features/authSlice'
import chatSlice from './features/chatSlice'
import { threadApi } from './services/thread'
import { messageApi } from './services/message'
import { userApi } from './services/user'
import { authApi } from './services/auth'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        auth: authReducer,
        chat: chatSlice,
        [threadApi.reducerPath]: threadApi.reducer,
        [messageApi.reducerPath]: messageApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
            threadApi.middleware,
            messageApi.middleware,
            userApi.middleware,
            authApi.middleware,
        ),
})

setupListeners(store.dispatch)