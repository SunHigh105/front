<template>
  <div>
    <DestinationMap
      :destinations="destinations"
      :spent-times="spentTimes"
      :routes="routes"
      :markers="markers"
      :center="center"
      :zoom="zoom"
    />
    <div>{{ startTime }}</div>
  </div>
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
    ...mapState(['routes', 'destinations', 'spentTimes', 'departureTime']),
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
    // todo: 滞在時刻を算出
  },
  methods: {
    calcTime(hour, minute, spentTime) {
      let h = hour;
      let m = minute + spentTime;
      if (m >= 60) {
        h = h + Math.floor(m / 60);
        m = m % 60;
      }
      if (h >= 24) {
        h = h - 24;
      }
      return `${String(h).padStart(2, '0')} : ${String(m).padStart(2, '0')}`;
    },
  },
};
</script>
