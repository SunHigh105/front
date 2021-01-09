<template>
  <SearchForm
    :count="count"
    @add-destination="addDestination"
    @delete-destination="deleteDestination"
    @search-directions="searchDirections"
  />
</template>
<script>
import { mapState, mapMutations } from 'vuex';

import router from '@/routers/router.js';
import getDirections from '@/services/directions.js';
import SearchForm from '@/components/presentationals/SearchForm.vue';

export default {
  components: {
    SearchForm,
  },
  computed: {
    ...mapState(['count', 'routes', 'destinations']),
  },
  mounted() {
    // 目的地入力中の場合は、目的地をテキストボックスに入れる
    if (this.destinations.length < 1) return;
    Array.from(document.getElementsByName('destination')).map((d, i) => {
      d.value = this.destinations[i].name;
    });
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement',
      'resetDestinations',
      'resetRoutes',
    ]),
    addDestination() {
      this.increment();
    },
    deleteDestination() {
      this.decrement();
    },
    searchDirections() {
      // todo: 空欄の時はバリデーション
      const destinations = document.getElementsByName('destination');
      const spentTimes = document.getElementsByName('time');
      // 登録前に目的地とルートをリセット
      this.resetDestinations();
      this.resetRoutes();
      Array.from(destinations)
        .filter((d, i) => i + 1 < destinations.length)
        .map((d, i) => {
          getDirections(
            d.value,
            destinations[i + 1].value,
            Number(spentTimes[i + 1].value),
            i + 2 === destinations.length
          );
        });
      router.push('map');
    },
  },
};
</script>
