import './Chat.scss'
import Messages from '../messages/Messages'
import Input from '../input/Input'

import Cam from '../../img/cam.png'
import Add from '../../img/add.png'
import More from '../../img/more.png'
import ArrowBack from '../../img/arrow_back.svg'
import ProfilePic from '../../img/my_prof_pic.webp'

import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserProfile from '../userProfile/UserProfile'

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
  const navigate = useNavigate()

  return (
    <div className='Chat'>
      {
        id ?
          <>
            <div className="chatInfo">
              <span>
                <img className='arrow-back' src={ArrowBack} alt='' onClick={() => { navigate(-1) }} />
                {/* <img src={ProfilePic} alt="" /> */}
                <UserProfile img={ProfilePic} />
                <div className="userInfo">
                  <span>Krunal</span>
                  <span className='status'>typing...</span>
                </div>
              </span>
              <div className="chatIcons">
                <img src={Cam} alt="" />
                <img src={Add} alt="" />
                <img src={More} alt="" />
              </div>
            </div>
            <Messages />
            <Input />
          </>
          :
          <h1>Start Chat</h1>
      }
    </div>
  )
}

export default Chat