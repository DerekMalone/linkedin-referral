import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAllProfiles = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/profiles.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getSingleProfile = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/profiles/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export { getAllProfiles, getSingleProfile };
