<template>
  <div class="c-mapping">
    <div class="c-mapping__mapview">
      <!--<div id="map_view"></div>-->
      <GmapMap ref="myMap"
        :center="center"
        :zoom="zoom"
        map-type-id="roadmap"
      >
      </GmapMap>
    </div>
    <div class="c-mapping__list">
      <ul>
        <li v-for="destination in destinations" :key="destination.index">
          <div>{{ destination.index }}. {{ destination.name }}</div>
          <div>{{ destination.address }}</div>
          <div v-if="routes[destination.index - 1]">
            {{ routes[destination.index - 1].duration }} ({{ routes[destination.index - 1].distance }})
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    destinations: { type: Array, default: () => [] },
    routes: { type: Array, default: () => [] },
    center: { type: Object, requied: true },
    zoom: { type: Number, required: true },
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
}
</script>
