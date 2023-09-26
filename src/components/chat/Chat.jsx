import './Chat.scss'
import Messages from '../messages/Messages'
import Input from '../input/Input'

import Cam from '../../img/cam.png'
import Add from '../../img/add.png'
import More from '../../img/more.png'
import Delete from '../../img/delete_FILL0_wght400_GRAD0_opsz48.svg'
import ArrowBack from '../../img/arrow_back.svg'
import ProfilePic from '../../img/my_prof_pic.webp'

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserProfile from '../userProfile/UserProfile'
import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { useGetUserProfileQuery } from '../../services/user'
import { demoMessages } from '../../thunderClientData'

const Chat = () => {


  useEffect(() => {
    const handleBackButton = (e) => {
      e.preventDefault();

      console.log("BAck Button Click");
    };
    window.addEventListener('popstate', handleBackButton);
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

  const { id } = useParams()
  // console.log(id)
  const navigate = useNavigate()
  let { authTokens, user } = useContext(AuthContext)
  const { data, error, isLoading } = useGetUserProfileQuery({
    token: authTokens.access,
    id: id
  })

  // console.log("user prof data: ", data)
  // console.log("error: ", error)
  // console.log("isLoading: ", isLoading)

  let base_url = 'http://127.0.0.1:8080'

  const [messages, setMessages] = useState([])
 


  return (

    <div className='Chat'>
      {
        id ?
          <>
            <div className="chatInfo">
              <span>
                <img className='arrow-back' src={ArrowBack} alt='' onClick={() => { navigate(-1) }} />
                {/* <img src={ProfilePic} alt="" /> */}
                <UserProfile name={data?.name ? data?.name : data?.username} img={base_url + data?.profile_pic} />
                <div className="userInfo">
                  <span>{data?.name ? data?.name : data?.username}</span>
                  {/* <span className='status'>typing...</span> */}
                  <span className='status'>@{data?.username}</span>
                </div>
              </span>
              <div className="chatIcons">
                <img src={Cam} alt="" />
                <img src={Add} alt="" />
                <img src={More} alt="" style={{cursor:'pointer'}}/>
              </div>
            </div>
               <Messages messages={messages} setMessages={setMessages}/>              
            <Input setMessages={setMessages}/>
          </>
          :
          <h1>Start Chat</h1>
      }
    </div>
  )
}

export default Chat