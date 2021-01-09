import Vue from 'vue';
import router from '@/routers/router.js';
import store from '@/stores/store.js';
import MainPage from '@/components/containers/MainPage.vue';

import '@/sass/app.scss';

import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: MAP_API_KEY,
    libraries: 'places',
  },
});

const app = new Vue({
  components: {
    MainPage,
  },
  el: '#app',
  router,
  store,
  render: h => h(MainPage),
});
