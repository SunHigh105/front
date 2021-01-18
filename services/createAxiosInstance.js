import axios from 'axios';

const createAxiosInstance = () => {
  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  });
  return instance;
};

export default createAxiosInstance;
