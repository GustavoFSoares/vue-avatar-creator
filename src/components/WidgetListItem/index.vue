<template>
  <section class="widget-list-item">{{ name }}</section>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.widget-list-item {
  width: 48px;
  height: 48px;
  overflow: hidden;
}
</style>
