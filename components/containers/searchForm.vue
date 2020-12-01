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
import requestToLaravel from '@/services/requestToLaravel.js';
import requestToMap from '@/services/requestToMap.js';
import InputFormPage from '@/components/presentationals/SearchFormPage.vue';

export default {
  components: {
    InputFormPage,
  },
  computed: {
    ...mapState([
      'count'
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
      getDirections();
    },
  }
} 
</script>
