<template>
  <div>
    <label>Departure time</label>
    <select name="departure">
      <option v-for="h in hour" :key="h.index" :value="h">{{ h }}</option>
    </select>
    :
    <select name="departure">
      <option v-for="t in time" :key="t.index" :value="t">{{ t }}</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hour: [...Array(24)].map((_, i) => i),
      time: [...Array(6)].map((_, i) => i * 10),
    };
  },
};
</script>
