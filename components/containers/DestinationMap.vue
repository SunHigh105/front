<template>
  <div>
    <DestinationMap
      :destinations="destinations"
      :spent-time-list="spentTimeList"
      :routes="routes"
      :markers="markers"
      :center="center"
      :zoom="zoom"
      :handle-regist="'regist'"
      @regist="regist"
    />
  </div>
</template>
<script>
import { mapState } from 'vuex';
import DestinationMap from '@/components/presentationals/DestinationMap.vue';
import { calcTime, formatTime } from '@/utils/time.js';
import { registPlan } from '@/services/plans.js';
import router from '@/routers/router.js';

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
    ...mapState(['destinations', 'routes', 'spentTimes', 'departureTime']),
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
    spentTimeList() {
      const list = [];
      let fromTime = this.departureTime;

      this.spentTimes.map((t, i) => {
        const toTime = calcTime(fromTime.hour, fromTime.minute, t);
        list.push({
          from: formatTime(fromTime.hour, fromTime.minute),
          to: formatTime(toTime.hour, toTime.minute),
        });
        if (i + 1 < this.spentTimes.length) {
          // todo: jsエラーが出るので解消したい
          const interval = Math.floor(this.routes[i].duration.value / 60);
          fromTime = calcTime(toTime.hour, toTime.minute, interval);
        }
      });

      return list;
    },
  },
  methods: {
    regist() {
      // Plan Title Validation
      const planTitle = document.getElementsByName('plan_title')[0].value;
      if (planTitle === '') {
        alert('Please Input Plan Title');
        return false;
      }
      const places = [];
      this.destinations.map((d, i) => {
        places.push({
          index: d.index,
          place: d.name,
          time: this.spentTimes[i],
        });
      });
      registPlan(
        {
          plan_title: planTitle,
          hour: this.departureTime.hour,
          minute: this.departureTime.minute,
        },
        places
      );
      router.push('model_plans');
    },
  },
};
</script>
