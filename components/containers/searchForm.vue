<template>
  <InputFormPage
    :count="count"
    @add-destination="addDestination"
    @delete-destination="deleteDestination"
    @search-directions="searchDirections"
  />
</template>
<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
import getDirections from '@/services/directions.js';
import InputFormPage from '@/components/presentationals/SearchFormPage.vue';

export default {
  components: {
    InputFormPage,
  },
  computed: {
    ...mapState([
      'count',
      'routes'
    ]),
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ]),
    addDestination() {
      this.increment();
    },
    deleteDestination() {
      this.decrement();
    },
    searchDirections() {
      const destinations = document.getElementsByName('destination');
      const spentTimes = document.getElementsByName('time');
      console.log(destinations);
      Array.from(destinations)
        .filter((d, i) => (i + 1) < destinations.length)
        .map((d, i) => {
          getDirections(d.value, destinations[i + 1].value);
        });
      console.log(this.routes);
    },
  }
} 
</script>
