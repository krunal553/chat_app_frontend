import './ChatList.scss'
import { useNavigate } from 'react-router-dom'
import { chatlist } from '../../thunderClientData'
import React, { useContext, useState, useRef, useEffect } from 'react';
import AuthContext from '../../context/AuthContext'

import { useGetUserChatlistQuery } from '../../services/thread'

const ChatList = () => {

  const navigate = useNavigate();
  let { user, authTokens } = useContext(AuthContext)
  let base_url = 'http://127.0.0.1:8080'
  const ws = useRef(null);

  const { data, error, isLoading, refetch  } = useGetUserChatlistQuery({ token: authTokens?.access })

  useEffect(() => {
    // Establish WebSocket connection when component mounts
    ws.current = new WebSocket('ws://127.0.0.1:8080/ws/user/' + user.pid + '/');

    // Handle received WebSocket messages
    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      // Handle the received message as needed
      console.log('Received message:', message);
      refetch();

    };

    // Clean up WebSocket connection when component unmounts
    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);


  return (

    <div className='ChatList'>
      {data?.map(chat => (
        <div
          key={chat.id}
          className="chatsContainer"
          onClick={() => { navigate(`${chat.id}`) }}
        >
          <div className="userChat">
            <img src={base_url+chat?.user_to_chat_with.profile_pic} alt="" />
            <div className="userInfo">
              <span >
                {chat.user_to_chat_with.username}
              </span>
              <p>{
                chat.last_message.body.length > 20
                  ? chat.last_message.body.slice(0, 20) + "..."
                  : chat.last_message.body}
              </p>
            </div>
          </div>
          <div className="chatInfo">
            <span className='time'>12:43</span>
            { chat.un_read_count ? <span className="unseen">{chat.un_read_count}</span> : null}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChatList