import React, { useEffect, useRef } from 'react';
import './Messages.scss';
import Message from '../message/Message';
import { useGetChatMessagesQuery } from '../../services/message'
import { useParams } from 'react-router-dom';
import  { useContext } from 'react'
import AuthContext from '../../context/AuthContext'


const Messages = ({ messages, setMessages }) => {
  const messagesContainerRef = useRef(null);
  const { id } = useParams()
  let { authTokens, user } = useContext(AuthContext)

  const {data, isSuccess, isLoading, refetch} = useGetChatMessagesQuery({ token: authTokens?.access, id: id })
  useEffect(()=>{
    if (isSuccess) {
      setMessages(data)
    }
    else {
      setMessages(null)
    }
  },[data, isSuccess, isLoading])

  useEffect( () => {
      refetch()
  },[id])


  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className='Messages' ref={messagesContainerRef}>
      
      { isSuccess ? <>
      {messages?.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      </> : 
      <>
        <Message message={null} />
      </>
      }
    </div>
  );
};

export default Messages;
