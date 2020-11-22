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
        <li v-for="destination in destinationList" :key="destination.index">
          <div>{{ destination.place }}</div>
          <div>{{ destination.time }} {{ destination.distance }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    destinationList: { type: Array, default: () => [] },
  },
  data() {
    return {
      center: {
        lat:35.6585805, 
        lng:139.7454329
      },
      zoom: 12,
    }
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
