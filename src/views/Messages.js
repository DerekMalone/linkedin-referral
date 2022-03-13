import { array } from 'prop-types';
import React, { useState, useEffect } from 'react';
import getAllMessages from '../api/data/messagesData';

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllMessages().then((practArray) => {
      if (isMounted) setMessages(practArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // const displayMessages = (messages) => {
  //   let
  //   messages.forEach(message => {
  //   });
  // };

  return (
  <>
    <div className='messageConatainer'>
    {array.map(messages) => (
      
    )}
    </div>
    </>);
}
