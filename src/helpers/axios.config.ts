import axios from 'axios';

const headers = {
  'Content-Type': 'application/json'
};
const axiosConfig = axios.create({
  headers,
  baseURL: ''
});

export default axiosConfig;