import React from 'react'
import { useGetUserChatlistQuery, useCreateChatMutation } from '../services/thread'
import { useCreateMessageMutation, useClearChatMessagesMutation, useGetChatMessagesQuery } from '../services/message'
import { useGetUserProfileQuery, useSearchUserProfilesQuery } from '../services/user'
import { useGetAuthTokenMutation, useUpdateAuthTokenMutation } from '../services/auth'
import { useState } from 'react'
import AuthContext from '../context/AuthContext'
import {useContext} from 'react';

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { loginUser } from '../features/authSlice'


const Test = () => {

    let user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    // console.log("user ", user)
    let {loginUser} = useContext(AuthContext)


    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3ODQxOTc3LCJpYXQiOjE2ODc0MDk5NzcsImp0aSI6ImY0NGNjNjQ5ZTM5YTRiM2I4Y2JmYWRkMDIxMjlmMDE1IiwidXNlcl9pZCI6MiwidXNlcm5hbWUiOiJzdXBlcnVzZXIiLCJwcm9maWxlX3BpYyI6Ii9tZWRpYS9wcm9maWxlX3BpY3R1cmVzL2RlZmF1bHQuanBnIn0.KVATa48rwa8_CoVQezKgEdiUHqHYG8hHERaiCdvK36A'
    let receiver_id = "ff57b66e-3435-4dd9-b3d6-262fb1aee4a1"
    let id = "c89b6d90-74eb-4fa2-b770-38ce361b1107"

    // console.log('Get User ChatList')
    // const { data, error, isLoading } = useGetUserChatlistQuery({token:token})
    // console.log("data: ", data)
    // console.log("error: ", error)
    // console.log("isLoading: ", isLoading)

    // console.log("get messages")
    // const { data, error, isLoading} = useGetChatMessagesQuery({token:token, id:id})
    // console.log("data: ", data)
    // console.log("error: ", error)
    // console.log("isLoading: ", isLoading)

    // console.log("create messages")
    // const [createMessage, responseInfo] = useCreateMessageMutation({token:token})
    // console.log("data: ", data)
    // console.log("error: ", error)
    // console.log("isLoading: ", isLoading)
    // console.log(responseInfo)

    // console.log("clear messages")
    const [clearChatMessages, responseInfo] = useClearChatMessagesMutation()
    // console.log(responseInfo)

    // console.log("create chat")
    const [createChat, res] = useCreateChatMutation()
    // console.log("create chat res", res)

    // user
    // const {data, error, isLoading} = useGetUserProfileQuery({
    //     token:token,
    //     id:"7d810e1d-5732-40f3-891f-1a1e37b1dbc7"
    // })

    // console.log("user prof data: ", data)
    // console.log("error: ", error)
    // console.log("isLoading: ", isLoading)

    // user search
    // const [query, setQuery] = useState('')
    // const {data, error, isLoading} = useSearchUserProfilesQuery({
    //     token:token,
    //     query:query
    // })

    // console.log("user seach results: ", data)
    // console.log("error: ", error)
    // console.log("isLoading: ", isLoading)

    // get token
    const [ getAuthToken, login_response ] = useGetAuthTokenMutation()
    const [ updateAuthToken, response ] = useUpdateAuthTokenMutation()
    console.log("login response", login_response)

    let newMessage = {
        thread: "c89b6d90-74eb-4fa2-b770-38ce361b1107",
        body: "hii from redux as superuser at 24-06-2023 8:52"
      }

    return (
        <div>
            <h1>Create Chat message</h1>
            <button 
                onClick={()=>
                    {
                        clearChatMessages({
                            token:token,
                            id:"c89b6d90-74eb-4fa2-b770-38ce361b1107"
                        }) 
                    }
                }
            >
                Clear Messages
            </button>
            <button
                onClick={()=> {
                    createChat({
                        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3ODQxOTc3LCJpYXQiOjE2ODc0MDk5NzcsImp0aSI6ImY0NGNjNjQ5ZTM5YTRiM2I4Y2JmYWRkMDIxMjlmMDE1IiwidXNlcl9pZCI6MiwidXNlcm5hbWUiOiJzdXBlcnVzZXIiLCJwcm9maWxlX3BpYyI6Ii9tZWRpYS9wcm9maWxlX3BpY3R1cmVzL2RlZmF1bHQuanBnIn0.KVATa48rwa8_CoVQezKgEdiUHqHYG8hHERaiCdvK36A',
                        body: {
                            receiver_id: "7d810e1d-5732-40f3-891f-1a1e37b1dbc7"
                          }
                    })
                }}
            >
                create chat
            </button>

            {/* <input type="text" placeholder='search users' value={query} onChange={(e)=>{setQuery(e.target.value)}}/> */}

            <button onClick={()=>{
                getAuthToken({
                    body: {
                    username:'krunal',
                    password: 'krunal'
                    }
                })
            }}>login</button>

            <button onClick={()=>{
                updateAuthToken({
                    body: {
                        refresh:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90e…BnIn0.BrGx9CR-U5PfSWA_m9ORQoH6qSLkv5NPHSmMvGebCLI"
                    }
                })
            }}>refresh token</button>

            <form onSubmit={loginUser}>
                <input 
                    type="text" 
                    placeholder='username' 
                    name='username'
                />
                <input 
                    type="password" 
                    placeholder='password' 
                    name='password'
                />
                <button type='submiit'>login</button>
            </form>

        </div>
    )
}

export default Test