import Vue from 'vue';
import VueRouter from 'vue-router';
import SearchForm from '@/components/containers/SearchForm.vue';
import DestinationMap from '@/components/containers/DestinationMap.vue';
import ModelPlanList from '@/components/containers/ModelPlanList.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: SearchForm },
    { path: '/map', component: DestinationMap },
    { path: '/model_plans', component: ModelPlanList },
  ],
});

export default router;
