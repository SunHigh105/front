<template>
  <ul class="c-model-plans">
    <li v-for="plan in modelPlans" :key="plan.id">
      <a href="javascript:void(0);" @click="getPlaces(plan.id)">{{
        plan.plan_title
      }}</a>
      <div>{{ plan.created_at }}</div>
    </li>
    <li class="c-model-plans__fish-img"></li>
  </ul>
</template>
<script>
export default {
  props: {
    modelPlans: { type: Array, default: () => [] },
    clickEvent: { type: String, default: '' },
  },
  methods: {
    getPlaces(id) {
      this.$emit(this.clickEvent, id);
    },
  },
};
</script>
