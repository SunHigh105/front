import Vue from 'vue';
import Example from '../components/Example.vue';
import '../sass/style.scss';

const app = new Vue({
  el: "#app",
  components: {
    Example,
  },
	data: {
		message: 'Hello World'
	}
})
