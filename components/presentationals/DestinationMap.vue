<template>
  <div class="c-mapping">
    <div class="c-mapping__mapview">
      <GmapMap ref="myMap" :center="center" :zoom="zoom" map-type-id="roadmap">
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :label="m.label"
          :clickable="true"
          :draggable="false"
          @click="center"
        />
      </GmapMap>
    </div>
    <div class="c-mapping__list">
      <ul>
        <li v-for="destination in destinations" :key="destination.index">
          <div>{{ destination.index }}. {{ destination.name }}</div>
          <div>{{ destination.address }}</div>
          <div>
            {{ spentTimeList[destination.index - 1].from }} ~
            {{ spentTimeList[destination.index - 1].to }}
          </div>
          <div v-if="routes[destination.index - 1]">
            {{ routes[destination.index - 1].duration.text }} ({{
              routes[destination.index - 1].distance.text
            }})
          </div>
        </li>
      </ul>
    </div>
    <div class="c-mapping__submit">
      <BaseTxtInput :label="'Plan Title'" :name="'plan_title'" />
      <BaseBtn :label="'Regist'" :click-event="'regist'" @regist="regist" />
    </div>
  </div>
</template>
<script>
import BaseBtn from '@/components/presentationals/bases/BaseBtn.vue';
import BaseTxtInput from '@/components/presentationals/bases/BaseTxtInput.vue';

export default {
  components: {
    BaseBtn,
    BaseTxtInput,
  },
  props: {
    destinations: { type: Array, default: () => [] },
    spentTimeList: { type: Array, default: () => [] },
    routes: { type: Array, default: () => [] },
    markers: { type: Array, default: () => [] },
    center: { type: Object, requied: true },
    zoom: { type: Number, required: true },
    handleRegist: { type: String, required: true },
  },
  mounted() {
    // console.log(this.destinations);
    console.log(this.spentTimeList);
    // console.log(this.routes);
  },
  methods: {
    regist() {
      this.$emit(this.handleRegist);
    },
  },
  /*
  mounted(){
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${MAP_API_KEY}&callback=initMap`;
    script.defer = true;
    this.initMap();
    document.head.appendChild(script);

  },
  methods: {
    initMap() {
      const map = new google.maps.Map(document.getElementById('map_view'), {
        center: this.center,
        zoom: this.zoom,
      });
    },
  }
  */
};
</script>
