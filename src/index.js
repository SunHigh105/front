import Vue from 'vue';
import router from '@/routers/router.js';
import store from '@/stores/store.js';
import MainComponent from '@/components/containers/MainContainer.vue';

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
    MainComponent,
  },
  el: "#app",
  router,
  store,
  render: h => h(MainComponent)
})
