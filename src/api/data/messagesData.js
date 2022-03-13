import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAllMessages = async () => {
  const message = await axios.get(`${dbUrl}/messages.json`);
  const messageData = Object.values(message.data);
  return messageData;
};

const getDereksMes = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/messages/-My38wYxLxT9CzAWoeUA.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const getSabrinasMes = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/messages/-My39aH6ZIi0YM6_QJ59.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const getYasminesMes = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/messages/-My39we75hBuutxw44wu.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export {
  getAllMessages, getDereksMes, getSabrinasMes, getYasminesMes,
};
