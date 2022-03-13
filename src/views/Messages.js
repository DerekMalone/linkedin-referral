import React, { useState, useEffect } from 'react';
import { getDereksMes, getSabrinasMes, getYasminesMes } from '../api/data/messagesData';
// import MessageComponent from '../components/MessageComponent';

export default function Messages() {
  const [dMessages, setDMessages] = useState([]);
  const [sMessages, setSMessages] = useState([]);
  const [yMessages, setYMessages] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getDereksMes().then((messageArray) => {
      if (isMounted) setDMessages(messageArray);
    });
    getSabrinasMes().then((messageArray) => {
      if (isMounted) setSMessages(messageArray);
    });
    getYasminesMes().then((messageArray) => {
      if (isMounted) setYMessages(messageArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <div className="dereksDiv">
        {dMessages.displayName}
      </div>
      <div className="dereksDiv">
        {sMessages.displayName}
      </div>
      <div className="dereksDiv">
        {yMessages.displayName}
      </div>
      {/* {messages.map((message) => (
        <MessageComponent key={message.userId} message={message} />
      ))} */}
    </>
  );
}
