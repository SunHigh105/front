<template>
  <ModelPlanList :model-plans="modelPlans" />
</template>
<script>
import ModelPlanList from '@/components/presentationals/ModelPlanList.vue';
import { getPlans } from '@/services/plans.js';
import { mapState } from 'vuex';

export default {
  components: {
    ModelPlanList,
  },
  computed: {
    ...mapState(['plans']),
    modelPlans() {
      return this.plans;
    },
  },
  mounted() {
    getPlans();
  },
};
</script>
