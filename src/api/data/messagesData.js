import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAllMessages = async () => {
  const message = await axios.get(`${dbUrl}/messages.json`);
  const messageData = Object.values(message.data);
  return messageData;
};

export default getAllMessages;
