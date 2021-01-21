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
    ...mapState([
      'count',
      'routes',
      'destinations',
      'spentTimes',
      'departureTime',
    ]),
  },
  mounted() {
    // 目的地入力中の場合は、目的地をテキストボックスに入れる
    if (this.destinations.length < 1) return;
    Array.from(document.getElementsByName('destination')).map((d, i) => {
      d.value = this.destinations[i].name;
    });
    Array.from(document.getElementsByName('time')).map((t, i) => {
      t.value = this.spentTimes[i];
    });
    const departureTime = document.getElementsByName('departure');
    departureTime[0].value = this.departureTime.hour;
    departureTime[1].value = this.departureTime.minute;
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement',
      'addSpentTime',
      'setDepartureTime',
      'resetState',
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
      const departureTime = document.getElementsByName('departure');

      try {
        // 入力フォームバリデーション
        Array.from(destinations).map(d => {
          if (d.value === '') {
            throw 'Please Input Destination';
          }
        });

        // 登録前に目的地・ルート・出発時刻をリセット
        this.resetState();

        // ルート検索・目的地をStoreに登録
        Array.from(destinations)
          .filter((d, i) => i + 1 < destinations.length)
          .map((d, i) => {
            getDirections(
              d.value,
              destinations[i + 1].value,
              i + 2 === destinations.length
            );
          });

        // 出発時刻をStoreに登録
        this.setDepartureTime({
          hour: Number(departureTime[0].value),
          minute: Number(departureTime[1].value),
        });

        // 各地点の滞在時間をStoreに登録
        Array.from(spentTimes).map(time => {
          this.addSpentTime({ spentTime: Number(time.value) });
        });

        router.push('map');
      }
      catch(e) {
        alert('Please Input Destination');
      }
    },
  },
};
</script>
