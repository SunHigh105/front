import axios from 'axios';
import store from '../stores/store.js';

const getDirections = async (
  start = '東京駅',
  end = '横浜駅',
  isLast = false
) => {
  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  });

  try {
    const res = await instance.post('/api/route', {
      origin: encodeURI(start),
      destination: encodeURI(end),
    });

    if (res.status === 200) {
      const routeInfo = res.data.routes[0].legs[0];
      store.commit('addRoute', {
        route: {
          distance: {
            text: routeInfo.distance.text,
            value: routeInfo.distance.value,
          },
          duration: {
            text: routeInfo.duration.text,
            value: routeInfo.duration.value,
          },
        },
      });
      store.commit('addDestination', {
        destination: {
          index: store.state.destinations.length + 1,
          name: start,
          address: routeInfo.start_address,
          location: routeInfo.start_location,
        },
      });
      if (isLast) {
        store.commit('addDestination', {
          destination: {
            index: store.state.destinations.length + 1,
            name: end,
            address: routeInfo.end_address,
            location: routeInfo.end_location,
          },
        });
      }
    }
  } catch (e) {
    console.log(e);
    window.alert('Get Directions Failed.');
  }
};

export default getDirections;
