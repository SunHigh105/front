import axios from 'axios';

const getDirections = async (origin = '東京駅', destination = '横浜駅') => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  });

  try {
    const res = await instance.post(`/api/route`, {
      origin: encodeURI(origin),
      destination: encodeURI(destination)
    });

    if (res.status === 200) {
      console.log(res.data);
      return res.data;
    }
  } catch (e) {
    console.log(e);
    window.alert('Get Directions Failed.');
  }
};

export default getDirections;
