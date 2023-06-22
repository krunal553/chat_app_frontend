import './Messages.scss'
import { messages } from '../../thunderClientData'
import Message from '../message/Message'

const Messages = () => {
  return (
    <div className='Messages'>
      {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
    </div>
  )
}

export default Messages