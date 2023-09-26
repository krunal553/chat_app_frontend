import './Input.scss';
import Attach from '../../img/attach.png';
import Img from '../../img/img.png';
import { useCreateMessageMutation } from '../../services/message';
import React, { useContext, useState, useRef, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';
import { useParams } from 'react-router-dom';
// import WebSocket from 'websocket';

const Input = ({ setMessages }) => {
  const [createMessage] = useCreateMessageMutation();
  let { authTokens } = useContext(AuthContext);
  const { id } = useParams();

  const [msgText, setMsgText] = useState('');
  const [file, setFile] = useState(null);
  let buttonDisabled = !msgText && !file;

  const ws = useRef(null);

  useEffect(() => {
    // Establish WebSocket connection when component mounts
    ws.current = new WebSocket('ws://127.0.0.1:8080/ws/chat/' + id + '/');

    // Handle received WebSocket messages
    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      // Handle the received message as needed
      console.log('Received message:', message);
      setMessages(prevMessages => [...prevMessages, message]);
    };

    // Clean up WebSocket connection when component unmounts
    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [id]);

  const handleMessgaeSubmit = async (e) => {
    e.preventDefault();
    const response = await createMessage({
      newMessage: {
        thread: id,
        body: msgText,
        file: null,
      },
      token: authTokens.access,
    });

    console.log('create msg res ', response);

    // Send the response of createMessage through the WebSocket
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(response.data));
    }

    setMsgText('');
  };

  return (
    <form onSubmit={handleMessgaeSubmit} className='Input'>
      <input
        type='text'
        placeholder='Type something'
        value={msgText}
        onChange={(e) => {
          setMsgText(e.target.value);
        }}
      />
      <div className='send'>
        <img src={Attach} alt='' />
        <input
          type='file'
          style={{ display: 'none' }}
          id='file'
          onChange={null}
        />
        <label htmlFor='file'>
          <img src={Img} alt='' />
        </label>
        <button type='submit' disabled={buttonDisabled}>
          Send
        </button>
      </div>
    </form>
  );
};

export default Input;
