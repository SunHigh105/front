<template>
  <MainComponent
    :page-title="pageTitle"
    :nav-links="navLinks.filter(n => n.path != '/map')"
  />
</template>
<script>
import MainComponent from '@/components/presentationals/MainComponent.vue';

export default {
  components: {
    MainComponent,
  },
  data(){
    return {
      pageTitle: 'Destination Setting',
      navLinks: [
        { path: '/', txt: 'Destination Setting' },
        { path: '/map', txt: 'Map' },
        { path: '/model_plans', txt: 'Model Plans' },
      ],
    }
  },
  watch: {
    $route() {
      this.changePageTitle();
    },
  },
  mounted() {
    this.changePageTitle();
  },
  methods: {
    changePageTitle() {
      this.navLinks
        .filter(link => link.path === this.$route.path)
        .map(link => {
          this.pageTitle = link.txt;
        });
    }
  }
}
</script>
