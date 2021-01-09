<template>
  <ModelPlanList :model-plans="modelPlans" />
</template>
<script>
import ModelPlanList from '@/components/presentationals/ModelPlanList.vue';
export default {
  components: {
    ModelPlanList,
  },
  data() {
    return {
      modelPlans: [],
    };
  },
  mounted() {
    [...Array(5)].map((_, i) => {
      this.modelPlans.push({
        index: i + 1,
        title: `Model Plan ${i + 1}`,
        author: 'hogehoge',
        created: '2020/11/17',
      });
    });
  },
};
</script>
