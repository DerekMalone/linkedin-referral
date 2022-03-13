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

const addProfileRelationship = (relationshipObj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/profileRelationships.json`, relationshipObj)
    .then((response) => {
      const relationshipId = response.data.name;
      axios
        .patch(`${dbUrl}/profileRelationships/${relationshipId}.json`, {
          relationshipId,
        })
        .then(resolve);
    })
    .catch(reject);
});

// get users

//

export { getAllProfiles, getSingleProfile, addProfileRelationship };
