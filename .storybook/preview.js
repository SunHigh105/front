
// import '../sass/app.scss';
import Decorator from './Decorator.vue';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [story => ({
  components: { Decorator, story },
  template: '<Decorator><story slot="story" /></Decorator>'
})];
