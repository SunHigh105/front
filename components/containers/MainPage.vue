<template>
  <MainPage
    :page-title="pageTitle"
    :nav-links="navLinks.filter(n => n.path != '/map')"
  />
</template>
<script>
import MainPage from '@/components/presentationals/MainPage.vue';

export default {
  components: {
    MainPage,
  },
  data() {
    return {
      pageTitle: 'Destination Setting',
      navLinks: [
        { path: '/', txt: 'Destination Setting' },
        { path: '/map', txt: 'Map' },
        { path: '/model_plans', txt: 'Model Plans' },
      ],
    };
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
    },
  },
};
</script>
