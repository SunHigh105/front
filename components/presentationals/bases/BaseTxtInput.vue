<template>
  <label>{{ label }}
    <input type="text" :name="name">
  </label>
</template>
<script>
export default {
  props: {
    label: { type: String, default: '' },
    name: { type: String, default: '' },
  },
}
</script>
