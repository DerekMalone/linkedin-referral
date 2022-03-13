import React, { useState, useEffect } from 'react';
import {
  getDereksMes,
  getSabrinasMes,
  getYasminesMes,
} from '../api/data/messagesData';
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
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'left',
            height: 900,
            marginTop: 75,
          }}
        >
          <div
            style={{
              border: '1px solid gray',
              padding: 20,
              borderRadius: 10,
              width: 600,
            }}
          >
            <div
              style={{ marginBottom: 50, borderBottom: '1px solid lightgray' }}
            >
              <h2>Account Coordinator Role</h2>
              <p>Yasmin and You</p>
            </div>
            <div style={{ marginBottom: 50 }}>
              <img
                style={{
                  borderRadius: 120,
                  marginRight: 10,
                  width: 100,
                  height: 100,
                }}
                src="http://www.simpleimageresizer.com/_uploads/photos/29333ee6/Persona_Image_100x100.png"
                alt="yasmin"
              />
              <img
                style={{
                  borderRadius: 120,
                  marginRight: 10,
                  width: 100,
                  height: 100,
                }}
                src="http://www.simpleimageresizer.com/_uploads/photos/29333ee6/sabrina_100x100.png"
                alt="sabrina"
              />
              <h6 style={{ marginTop: 10 }}>
                Yasmin Wang and Sabrina Gutierrez
              </h6>
              <h6 style={{ color: '#0077b5' }}>
                Invite others to join this chat
              </h6>
            </div>
            <div
              style={{ display: 'flex', marginBottom: 50 }}
              className="dereksDiv"
            >
              <div style={{ flexDirection: 'colummn' }}>
                <h2>{dMessages.displayName}</h2>
                <h6>{dMessages.details}</h6>
              </div>
            </div>
            <div
              style={{ display: 'flex', marginBottom: 50 }}
              className="sabrinasDiv"
            >
              <div style={{ flexDirection: 'colummn' }}>
                <h2>{sMessages.displayName}</h2>
                <h6>{sMessages.details}</h6>
              </div>
            </div>
            <div
              style={{ display: 'flex', marginBottom: 50 }}
              className="yasminsDiv"
            >
              <div style={{ flexDirection: 'colummn' }}>
                <h2>{yMessages.displayName}</h2>
                <h6>{yMessages.details}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
