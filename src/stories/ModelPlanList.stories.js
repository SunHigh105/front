import ModelPlanList from '../../components/presentationals/ModelPlanList.vue';

export default {
  title: 'Presentationlas/ModelPlanList',
  component: ModelPlanList,
}

const Template = args => ({
  props: args,
  components: { ModelPlanList },
  template: '<model-plan-list v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  modelPlans: [
    { id: 1, plan_title: 'test_plan', created_at: '2021/03/17 22:37:50' },
  ],
  clickEvent: 'handle-click',
};
