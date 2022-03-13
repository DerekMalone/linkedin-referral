import React, { useState, useEffect } from 'react';
import getAllMessages from '../api/data/messagesData';
import MessageComponent from '../components/MessageComponent';

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllMessages().then((messageArray) => {
      if (isMounted) setMessages(messageArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {messages.map((message) => (
        <MessageComponent key={message.userId} message={message} />
      ))}
    </>
  );
}
