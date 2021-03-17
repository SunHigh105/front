<template>
  <div>
    <slot name="story"></slot>
  </div>
</template>
<script>
// import { component } from 'vue/types/umd'
export default {
  name: 'Decorator'
};
</script>
<style lang="scss">
@import '../sass/app.scss';
</style>
