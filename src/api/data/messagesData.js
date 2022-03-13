import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAllMessages = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/messages.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default { getAllMessages };
