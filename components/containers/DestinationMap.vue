<template>
  <DestinationMap
    :destinations="destinations"
    :routes="routes"
    :markers="markers"
    :center="center"
    :zoom="zoom"
  />
</template>
<script>
import { mapState } from 'vuex';
import DestinationMap from '@/components/presentationals/DestinationMap.vue';

export default {
  components: {
    DestinationMap,
  },
  data() {
    return {
      zoom: 12,
    };
  },
  computed: {
    ...mapState(['routes', 'destinations']),
    center() {
      return this.destinations[0]
        ? {
            lat: this.destinations[0].location.lat,
            lng: this.destinations[0].location.lng,
          }
        : {
            lat: 35.6585805,
            lng: 139.7454329,
          };
    },
    markers() {
      const markerList = [];
      this.destinations.map(d => {
        markerList.push({
          position: d.location,
          label: String(d.index),
        });
      });
      return markerList;
    },
  },
};
</script>
