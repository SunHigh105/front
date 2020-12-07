import axios from 'axios';
import store from '../stores/store.js';

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
      const distance = res.data.routes[0].legs[0].distance.text;
      const duration = res.data.routes[0].legs[0].duration.text;
      store.commit('addRoute', {
        route: {
          distance: distance,
          duration: duration
        }
      });
    }
  } catch (e) {
    console.log(e);
    window.alert('Get Directions Failed.');
  }
};

export default getDirections;
