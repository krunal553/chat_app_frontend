import './Message.scss'

const Messages = ({ message }) => {
  return (
    // <div className={
    //   message.sender.username === user.username
    //     ? "Message owner"
    //     : "Message"
    // }>
    <>
    <div className="Message owner">
      <div className="messageInfo">
        <img src={message.sender.profile_pic} alt="" />
        <span>{message.timestamp.slice(11,16)}</span>
        {/* <span>{message.timestamp}</span> */}
      </div>
      <div className="messageContent">
        {message.file && <img src={message.file} alt="" />}
        {message.body && <p>{message.body}</p>}
        {/* <span>{message.timestamp}</span> */}
      </div>
    </div>
    <div className="Message">
      <div className="messageInfo">
        <img src={message.sender.profile_pic} alt="" />
        <span>{message.timestamp.slice(11,16)}</span>
        {/* <span>{message.timestamp}</span> */}
      </div>
      <div className="messageContent">
        {message.file && <img src={message.file} alt="" />}
        {message.body && <p>{message.body}</p>}
        {/* <span>{message.timestamp}</span> */}
      </div>
    </div>
    </>
  )
}

export default Messages