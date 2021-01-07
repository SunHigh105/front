<template>
  <MappingPage
    :destinations="destinations"
    :routes="routes"
    :center="center"
    :zoom="zoom"
  />
</template>
<script>
import { mapState } from 'vuex';
import MappingPage from '@/components/presentationals/MappingPage.vue';

export default {
  components: {
    MappingPage,
  },
  data() {
    return{
      zoom: 12
    }
  },
  computed: {
  ...mapState([
    'routes',
    'destinations',
  ]),
  center() {
    return this.destinations[0] ? 
      {
        lat: this.destinations[0].location.lat, 
        lng: this.destinations[0].location.lng,
      } : 
      {
        lat :35.6585805, 
        lng :139.7454329
      }
    }
  },
}
</script>
