<template>
  <label
    >{{ label }}
    <input type="text" :name="name" :value="value" />
  </label>
</template>
<script>
export default {
  props: {
    label: { type: String, default: '' },
    name: { type: String, default: '' },
    value: { type: String, default: '' },
  },
};
</script>
