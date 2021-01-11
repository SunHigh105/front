import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 1,
    routes: [],
    destinations: [],
    spentTimes: [],
    departureTime: {
      hour: 0,
      minute: 0,
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      if (state.count === 0) return;
      state.count--;
    },
    addSpentTime(state, payload) {
      state.spentTimes.push(payload.spentTime);
    },
    setDepartureTime(state, payload) {
      state.departureTime.hour = payload.hour;
      state.departureTime.minute = payload.minute;
    },
    addRoute(state, payload) {
      state.routes.push(payload.route);
    },
    addDestination(state, payload) {
      state.destinations.push(payload.destination);
    },
    resetState(state) {
      state.destinations = [];
      state.routes = [];
      state.spentTimes = [];
      state.departureTime = { hour: 0, time: 0 };
    },
  },
});

export default store;
