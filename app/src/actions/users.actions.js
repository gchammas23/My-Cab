import axios from 'axios';

const hostApi = process.env.NODE_ENV === "development" ? "http://localhost" : "http://localhost";
const portApi = process.env.NODE_ENV === "development" ? 3001 : 3001;

const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}/api`;


async function getUser(data) {
  const url = `${baseURLApi}/users/user`;
  return await axios.post(url, data).then(response => response.data);
}

async function createUser(data) {
  const url = `${baseURLApi}/users/addUser`;
  return await axios.post(url, data).then(response => response.data);
}

async function deleteUser(data) {
  const url = `${baseURLApi}/users/deleteUser`;
  return await axios.post(url, data).then(response => response.data);
}

async function updateUserPass(data) {
  const url = `${baseURLApi}/users/updatePass`;
  return await axios.post(url, data).then(response => response.data);
}

async function findUsername(username) {
  const url = `${baseURLApi}/users/findUsername`;
  return await axios.post(url, username).then(response => response.data);
}



export {
  getUser,
  createUser,
  deleteUser,
  updateUserPass,
  findUsername,
};