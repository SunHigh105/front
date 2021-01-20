<template>
  <ModelPlanList
    :model-plans="modelPlans"
    :click-event="'get-places'"
    @get-places="getPlaces"
  />
</template>
<script>
import ModelPlanList from '@/components/presentationals/ModelPlanList.vue';
import { getPlans, getPlaces } from '@/services/plans.js';
import router from '@/routers/router.js';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    ModelPlanList,
  },
  computed: {
    ...mapState(['plans']),
    modelPlans() {
      console.log(this.plans);
      return this.plans;
    },
  },
  mounted() {
    getPlans();
  },
  methods: {
    ...mapMutations(['resetState', 'setDepartureTime']),
    getPlaces(id) {
      // 登録前に目的地・ルート・出発時刻をリセット
      this.resetState();
      // 出発時刻をStoreに登録
      const targetPlan = this.plans.filter(plan => plan.id === id)[0];
      this.setDepartureTime({
        hour: targetPlan.start_time_h,
        minute: targetPlan.start_time_m,
      });
      // 目的地とルートをStoreに登録
      getPlaces(id);

      router.push('map');
    },
  },
};
</script>
