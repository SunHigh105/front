import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 1,
    routes: [],
    destinations: [],
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      if(state.count === 0) return;
      state.count--;
    },
    addRoute(state, payload) {
      state.routes.push(payload.route);
    },
    addDestination(state, payload) {
      state.destinations.push(payload.destination);
    }
  }
});

export default store;
