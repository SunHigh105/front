<template>
  <label
    >{{ label }}
    <input
      type="number"
      :name="name"
      :min="min"
      :max="max"
      :step="step"
      :value="value"
    />
  </label>
</template>
<script>
export default {
  props: {
    label: { type: String, default: '' },
    name: { type: String, default: '' },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 10000 },
    step: { type: Number, default: 1 },
    value: { type: Number, default: 0 },
  },
};
</script>
