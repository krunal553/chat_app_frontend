import './ChatList.scss'
import { useNavigate } from 'react-router-dom'
import { chatlist } from '../../thunderClientData'

const ChatList = () => {

  const navigate = useNavigate();

  return (
    <div className='ChatList'>
      {chatlist?.map(chat => (
        <div
          key={chat.thread_id}
          className="chatsContainer"
          onClick={() => { navigate(`${chat.thread_id}`) }}
        >
          <div className="userChat">
            <img src={chat.user_to_chat_with.profile_pic} alt="" />
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
            <span className="unseen">2</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChatList