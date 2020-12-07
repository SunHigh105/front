import axios from 'axios';
import store from '../stores/store.js';

const getDirections = async (start = '東京駅', end = '横浜駅') => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  });

  try {
    const res = await instance.post(`/api/route`, {
      origin: encodeURI(start),
      destination: encodeURI(end)
    });

    if (res.status === 200) {
      const routeInfo = res.data.routes[0].legs[0];
      store.commit('addRoute', {
        route: {
          distance: routeInfo.distance.text,
          duration: routeInfo.duration.text,
        }
      });
      store.commit('addDestination', {
        destination: {
          start: {
            name: start,
            address: routeInfo.start_address,
            location: routeInfo.start_location
          },
          end: {
            name: end,
            address: routeInfo.end_address,
            location: routeInfo.end_location
          },
        }
      });
    }
  } catch (e) {
    console.log(e);
    window.alert('Get Directions Failed.');
  }
};

export default getDirections;
