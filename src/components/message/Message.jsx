import './Message.scss'
import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'



const Messages = ({ message }) => {

  let { user } = useContext(AuthContext)
  let base_url = 'http://127.0.0.1:8080'


  return (
    <div className={
      message?.sender?.username === user?.username
        ? "Message owner"
        : "Message"
    }>
        <div className="messageInfo">
        <img src={base_url+message?.sender?.profile_pic} alt="" />
        <span>{message?.timestamp?.slice(11,16)}</span>
        {/* <span>{message.timestamp}</span> */}
      </div>
      <div className="messageContent">
        {message?.file && <img src={message?.file} alt="" />}
        {message?.body && <p>{message?.body}</p>}
        {/* <span>{message.timestamp}</span> */}
      </div>
    </div>
  )
}

export default Messages